function fixSearchForm() {
    var form = document.querySelector('#R-header-wrapper .searchbox');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = form.querySelector('input[name="q"]'); // 注意 name 应为 q
            if (!input) input = form.querySelector('input[name="search-by"]');
            if (input && input.value.trim()) {
                window.location.href = '/search/?q=' + encodeURIComponent(input.value.trim());
            }
        });
        console.log('搜索表单已被劫持');
    } else {
        setTimeout(fixSearchForm, 100);
    }
}
fixSearchForm();

document.addEventListener('DOMContentLoaded', function () {
  const articleBody = document.querySelector('#R-body-inner');
  if (!articleBody) return;

  // 同时处理段落和列表项（应对选项中的对话）
  const elements = articleBody.querySelectorAll('p, li');

  const baiqiRegex = /(<strong>白起[：:]<\/strong>)([^<]*(?:<(?!br\s*\/?>)[^<]*)*)(?=<br\s*\/?>|$)/gi;
  const playerRegex = /(<strong>(?:&ldquo;玩家名称&rdquo;|“玩家名称”|"玩家名称"|\[玩家姓名\])[：:]<\/strong>)([^<]*(?:<(?!br\s*\/?>)[^<]*)*)(?=<br\s*\/?>|$)/gi;

  elements.forEach(el => {
    let html = el.innerHTML;

    html = html.replace(baiqiRegex, (match, strong, content) => {
      return `<span style="color: #1c90f3;">${strong}${content}</span>`;
    });

    html = html.replace(playerRegex, (match, strong, content) => {
      return `<span style="color: #E2B245;">${strong}${content}</span>`;
    });

    el.innerHTML = html;
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // 仅处理标签详情页（URL 包含 /tags/ 且不是 /tags/ 本身）
    if (window.location.pathname.includes('/tags/') && !window.location.pathname.endsWith('/tags/')) {
        // 1. 修改主标题：将 :: 改为 : 并强制设置字号
        const mainTitle = document.querySelector('article > h1');
        if (mainTitle) {
            mainTitle.textContent = mainTitle.textContent.replace('::', ':');
            mainTitle.style.fontSize = '2.5rem';  // 直接内联样式，必定生效
        }

        // 2. 隐藏所有分组大字（h2 标签）
        document.querySelectorAll('article > h2').forEach(h2 => {
            h2.style.display = 'none';
        });

        // 3. 精准删除面包屑段落中的多余字符串 {class=...}，保留面包屑文本
        const allParagraphs = document.querySelectorAll('article ul li p');
        allParagraphs.forEach(p => {
            // 移除 "{class=...}" 及其前面的空格
            p.innerHTML = p.innerHTML.replace(/\s*\{class=.*?\}/g, '');
        });
    }
});

// 强制主题高亮使用地址栏查询词
(function() {
  if (!window.relearn) return;
  const q = new URLSearchParams(window.location.search).get('q')?.trim();
  if (!q) return;
  
  // 将查询词写入 sessionStorage，覆盖左侧搜索框残留
  window.sessionStorage.setItem(
    window.relearn.absBaseUri + "/search-value",
    q
  );
  
  // 触发主题的高亮函数
  function applyHighlight() {
    if (typeof window.relearn.markSearch === 'function') {
      window.relearn.markSearch(q);
    } else {
      setTimeout(applyHighlight, 50);
    }
  }
  applyHighlight();
})();

// 返回搜索按钮（仅在详情页显示）
(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get('q');
  if (!q) return;

  // 排除独立搜索页本身（路径包含 /search/ 时不显示按钮）
  if (window.location.pathname.includes('/search/')) return;

  const button = document.createElement('a');
  // 直接跳转到独立搜索页并携带查询词
  button.href = `/search/?q=${encodeURIComponent(q)}`;
  button.className = 'back-to-search-btn';
  button.innerHTML = '← 返回搜索结果';
  button.title = '返回搜索结果页面';

  const bodyInner = document.querySelector('#R-body-inner');
  if (bodyInner) {
    bodyInner.insertBefore(button, bodyInner.firstChild);
  }
})();


// 返回顶部按钮（基于 #R-body-inner，确保容器就绪）
(function() {
  var btn = document.createElement('button');
  btn.textContent = '↑';
  btn.id = 'back-to-top';
  btn.style.cssText = 'position:fixed;bottom:30px;right:30px;z-index:9999;width:44px;height:44px;border-radius:50%;background:#1c90f3;color:#fff;border:none;font-size:22px;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
  document.body.appendChild(btn);

  function bindScroll() {
    var container = document.getElementById('R-body-inner');
    if (!container) return false;

    function toggle() {
      btn.style.display = container.scrollTop > 200 ? 'flex' : 'none';
    }

    container.addEventListener('scroll', toggle);
    btn.addEventListener('click', function() {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 页面加载完成后立即检查一次（例如从链接带锚点进入时）
    toggle();
    return true;
  }

  // 如果容器尚未存在，轮询等待（通常不会有延迟，但保险）
  if (!bindScroll()) {
    var timer = setInterval(function() {
      if (bindScroll()) clearInterval(timer);
    }, 200);
  }
})();











// ========== 全文本精确补充搜索（延迟注入，确保容器已存在） ==========
(function() {
  let fulltextData = null;
  let isLoading = false;

  // 加载索引（只执行一次）
  function loadFulltextIndex() {
    if (fulltextData || isLoading) return;
    isLoading = true;
    fetch('/fulltext.json')
      .then(res => res.json())
      .then(data => {
        fulltextData = data;
        console.log('全文本索引加载完成，共', data.length, '个页面');
        // 如果当前已有搜索结果（如 URL 带 q），立即补充
        const query = (new URLSearchParams(window.location.search)).get('q')?.trim();
        if (query) injectFulltextResults(query);
      })
      .catch(() => console.warn('全文本索引加载失败'))
      .finally(() => isLoading = false);
  }

  // 注入补充结果
  function injectFulltextResults(query, waitCount = 0) {
    if (!query || !fulltextData || fulltextData.length === 0) return;

    // 等待 Pagefind 的结果容器出现（最多等 2 秒）
    const container = document.querySelector('.pagefind-ui__results');
    if (!container) {
      if (waitCount < 25) {                     // 最多等待 5 秒（25 × 200ms）
        setTimeout(() => injectFulltextResults(query, waitCount + 1), 200);
      }
      return;
    }

    // 收集已有路径（只比较路径，忽略 ?q= 等参数，实现准确去重）
    const existingPaths = new Set();
    container.querySelectorAll('a[href]').forEach(a => {
      try {
        const u = new URL(a.href, location.origin);
        existingPaths.add(u.pathname.replace(/\/$/, ''));
      } catch(e) {}
    });

// 隐藏与全文本匹配重复的 Pagefind 旧条目
container.querySelectorAll('.pagefind-ui__result').forEach(el => {
    const a = el.querySelector('a[href]');
    if (a && existingPaths.has(new URL(a.href, location.origin).pathname.replace(/\/$/, ''))) {
        el.style.display = 'none';   // 隐藏，不删除
    }
});

    // 过滤：页面路径在已有路径中不存在，且 title 或 content 含查询词
    const matches = fulltextData.filter(page => {
      try {
        const pagePath = new URL(page.url, location.origin).pathname.replace(/\/$/, '');
        if (existingPaths.has(pagePath)) return false;
        const text = (page.title + ' ' + page.content).toLowerCase();
        return text.includes(query.toLowerCase());
      } catch(e) {
        return false;
      }
    });

if (matches.length === 0) {
  var totalMatched = fulltextData.filter(function(p) {
    return (p.title + ' ' + p.content).toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }).length;
  if (window.updatePagefindMessage) {
    window.updatePagefindMessage({ totalMatched: totalMatched, addedCount: 0 });
  }
  return;
}

    // 克隆模板（使用 Pagefind 原生结果的样式）
    const template = container.querySelector('.pagefind-ui__result:not(.fulltext-injected)');
    const fragment = document.createDocumentFragment();

    matches.forEach(page => {
      const div = template ? template.cloneNode(true) : document.createElement('div');
      div.classList.add('fulltext-injected');
      div.classList.add('breadcrumb-added');

      // 设置链接（附加 ?q= 参数）
      const link = div.querySelector('a[href]');
      if (link) {
        const sep = page.url.includes('?') ? '&' : '?';
        link.href = page.url + sep + 'q=' + encodeURIComponent(query);
        link.textContent = page.title;
      }

      // 生成摘要并高亮关键词
      const excerptEl = div.querySelector('.pagefind-ui__result-excerpt');
      if (excerptEl) {
        const idx = page.content.toLowerCase().indexOf(query.toLowerCase());
        if (idx !== -1) {
          const start = Math.max(0, idx - 40);
          const end = Math.min(page.content.length, idx + query.length + 60);
          let snippet = page.content.substring(start, end);
          if (start > 0) snippet = '…' + snippet;
          if (end < page.content.length) snippet += '…';
          snippet = snippet.replace(new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
            '<mark class="search">$&</mark>');
          excerptEl.innerHTML = snippet;
        } else {
          excerptEl.textContent = page.content.substring(0, 80) + '…';
        }
      }

      // ---- 修复层级重复和位置 ----
      // 先移除克隆模板中可能已存在的旧层级元素（定时器添加的）
      const existingCrumb = div.querySelector('.result-breadcrumb');
      if (existingCrumb) existingCrumb.remove();

      // 只添加一个我们自己的层级，放在标题链接的下方
      if (typeof window.getBreadcrumb === 'function') {
        const crumbText = window.getBreadcrumb(page.url);
        if (crumbText) {
          const crumbDiv = document.createElement('div');
          crumbDiv.className = 'result-breadcrumb';
          crumbDiv.textContent = crumbText;

          // 寻找标题所在的容器
          const inner = div.querySelector('.pagefind-ui__result-inner') || div;
          const titleLink = inner.querySelector('a[href]');
          if (titleLink) {
            // 插入到标题链接的父元素（通常是 <p> 或 <div>）之后
            titleLink.parentNode.insertAdjacentElement('afterend', crumbDiv);
          } else {
            inner.appendChild(crumbDiv);
          }
        }
      }


      fragment.appendChild(div);
    });

    container.insertBefore(fragment, container.firstChild);
    // 简单统计并更新消息
    var allMatches = fulltextData.filter(p => (p.title + ' ' + p.content).toLowerCase().includes(query.toLowerCase()));
    if (window.updatePagefindMessage) {
      window.updatePagefindMessage({ totalMatched: allMatches.length, addedCount: matches.length });
    }
  }

  // 监听搜索框输入，延迟 800ms 后执行补充（等待 Pagefind 渲染完毕）
  function bindSearchTrigger() {
    const input = document.querySelector('.pagefind-ui__search-input');
    if (!input) {
      setTimeout(bindSearchTrigger, 300);
      return;
    }

    let debounceTimer;
    input.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      const query = this.value.trim();
      if (query) {
        debounceTimer = setTimeout(() => injectFulltextResults(query), 800);
      }
    });

    // 也监听 URL 参数（如从侧边栏搜索跳转过来）
    const urlQ = (new URLSearchParams(window.location.search)).get('q')?.trim();
    if (urlQ) {
      setTimeout(() => injectFulltextResults(urlQ), 800);
    }
  }

  // 页面加载时启动
  loadFulltextIndex();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindSearchTrigger);
  } else {
    bindSearchTrigger();
  }
})();




// ========== 搜索结果层级（全局函数 + 定时器） ==========
window.getBreadcrumb = function(url) {
  if (!url) return '';
  var path = url;
  try { path = new URL(url, location.origin).pathname; } catch(e) {}
  path = path.replace(/^\/|\/$/g, '');
  var parts = path.split('/').filter(function(p) { return p && p !== 'index.html'; });
  if (!parts.length) return '';
  var display = parts.map(function(part) {
    // 先解码
    part = decodeURIComponent(part);
    // 去掉开头的数字和点（如 "1.约会" → "约会"）
    part = part.replace(/^\d+\./, '');
    // 下划线替换为空格
    part = part.replace(/_/g, ' ');
    return part;
  });
  return display.join(' › ');
};

(function() {
  function addAll() {
    document.querySelectorAll('.pagefind-ui__result:not(.breadcrumb-added)').forEach(function(el) {
      el.classList.add('breadcrumb-added');
      var a = el.querySelector('a[href]');
      if (!a) return;
      var text = window.getBreadcrumb(a.getAttribute('href'));
      if (!text) return;
      var crumb = document.createElement('div');
      crumb.className = 'result-breadcrumb';
      crumb.textContent = text;

      // 找到标题的容器（<p class="pagefind-ui__result-title">）
      var title = el.querySelector('.pagefind-ui__result-title');
      if (title) {
        // 把层级插入标题后面（作为标题的下一个兄弟元素）
        title.parentNode.insertBefore(crumb, title.nextSibling);
      } else {
        // 如果找不到标题结构，回退到放在标题链接后面
        var inner = el.querySelector('.pagefind-ui__result-inner') || el;
        var link = inner.querySelector('a');
        if (link) {
          link.parentNode.insertBefore(crumb, link.nextSibling);
        } else {
          inner.appendChild(crumb);
        }
      }
    });
  }
  addAll();
  setInterval(addAll, 500);
})();




// ========== 消息前缀 + 全文本统计（极简，无 observer） ==========
(function() {
  function updateMessage() {
    var msg = document.querySelector('.pagefind-ui__message');
    if (!msg) return;
    var text = msg.textContent.trim();
    if (!text.startsWith('pagefind')) {
      msg.textContent = 'pagefind' + text;
    }
    // 统计信息只能通过全文本模块手动触发，这里仅添加前缀
  }

  // 页面加载后等一小会儿再执行，避免冲突
  setTimeout(updateMessage, 400);

  // 暴露全局函数，供全文本模块在注入后调用一次
  window.updatePagefindMessage = function(stats) {
    var msg = document.querySelector('.pagefind-ui__message');
    if (!msg) return;
    var base = msg.textContent.trim();
    // 移除旧统计
    base = base.replace(/\s*\[遍历全文本补充 \d+ 个，去除重复 \d+ 个\]$/, '');
    // 添加新统计
    if (stats) {
      var removed = stats.totalMatched - stats.addedCount;
      base += ' [遍历全文本补充 ' + stats.totalMatched + ' 个相关结果，去除重复 ' + removed + ' 个]';
    }
    msg.textContent = base;
  };
})();
