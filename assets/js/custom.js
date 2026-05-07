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











// 保底：手动补充 Pagefind 缺失的精确结果（支持多条目）
// 强制补充结果 + 预览 + 返回按钮修复
const missingWords = {
  "手链": [
    { title: "8.迷航", url: "/1.约会/传闻秘事/第一季/8.迷航/", excerpt: "……想到这，白起的脚步不禁放慢了些，他想起之前那个被落下的银杏手链，还有那名女孩。" },
    { title: "9.界限", url: "/1.约会/传闻秘事/第一季/9.界限/", excerpt: "他也看到自己把一串手链放在女孩手心，金黄的银杏在她细瘦的手腕上飘荡；" },
    { title: "占卜之约", url: "/1.约会/约会/er/占卜之约/", excerpt: "店里还卖很多用来转运的小道具呢，什么晶石戒指和手链之类的。" },
    { title: "秋深之约", url: "/1.约会/约会/er/秋深之约/", excerpt: "重新遇见他时的场景、腕上银杏手链陪我度过的每个日夜，我们等过的每个日出、看过的每夜星光……" },
    { title: "家居城之约", url: "/1.约会/约会/sr/家居城之约/", excerpt: "抬起手的瞬间看到挂在手腕上的银杏手链，想到了那个深夜赶来替我救场的男人。" },
    { title: "录影棚之约", url: "/1.约会/约会/sr/录影棚之约/", excerpt: "白起没有说话，一个眼神把我的视线引向放了跟踪器的银杏手链。" },
    { title: "故地之约", url: "/1.约会/约会/sr/故地之约/", excerpt: "小珠子串成的手链、有点儿旧但被保存得很好的布娃娃、透明的糖纸……" },
    { title: "三人之约", url: "/1.约会/约会/ssr/三人之约/", excerpt: "一切正常，手链我也一直戴在身上。" },
    { title: "微醺之约", url: "/1.约会/约会/ssr/微醺之约/", excerpt: "你送给我的礼物我很喜欢，送给我的手链我很喜欢。" },
    { title: "炙热之约", url: "/1.约会/约会/ssr/炙热之约/", excerpt: "Kevin老师： 哎呀手链不能这样戴，太土了！" },
    { title: "长旅之约", url: "/1.约会/约会/ssr/长旅之约_head/", excerpt: "当白起用小些的水晶为我制作了手链时，爱凑热闹的妖精们纷纷跑来祝福我们……" },
    { title: "香影之约", url: "/1.约会/约会/ssr/香影之约/", excerpt: "恰好被白起口袋里的一条胭脂匣手链勾住了。" },
    { title: "黎光之约", url: "/1.约会/约会/ssr/黎光之约/", excerpt: "他握住我的手腕，将手链的银杏叶压在我的脉搏上。" },
    { title: "SSR-圈地侵夺四星_银杏胸针", url: "/2.讯息/朋友圈/羁绊朋友圈/SSR-圈地侵夺四星_银杏胸针/", excerpt: "我也很喜欢那个银杏叶的胸针~和我的手链正好凑一对！" },
    { title: "手链与追踪器", url: "/2.讯息/电话/剧情解锁/0001_手链与追踪器/", excerpt: "那串手链…… 手链？哦，你说追踪器吗？ 我想问……学长，为什么手链是银杏呢？" },
    { title: "并肩作战", url: "/2.讯息/电话/剧情解锁/0009_并肩作战/", excerpt: "嗯，不过，我一直都有戴着你送我的手链哦。" }
  ]
  // 以后添加新词只需在这里加，例如：
  // "小混混": [
  //   { title: "晚安心愿", url: "/约会/晚安心愿/", excerpt: "白起：有，但我没有很刻意地想你。" }
  // ]
};

(function() {
  // 高亮函数
  function highlightText(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark class="search">$1</mark>');
  }

  // 给 URL 附加 ?q= 参数
  function appendQueryParam(url, query) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}q=${encodeURIComponent(query)}`;
  }

  function injectAllAndFixCounter() {
    const query = (new URLSearchParams(window.location.search)).get('q')?.trim();
    if (!query || !missingWords[query]) return;

    const container = document.querySelector('.pagefind-ui__results');
    if (!container) return;

    // 避免重复注入
    if (container.querySelector('.manual-injected')) return;

    const items = missingWords[query];
    const templateResult = container.querySelector('.pagefind-ui__result:not(.manual-injected)');

    items.forEach(item => {
      let div;
      if (templateResult) {
        div = templateResult.cloneNode(true);
        div.classList.add('manual-injected');
        const link = div.querySelector('a');
        if (link) {
          link.href = appendQueryParam(item.url, query);   // ← 带上 ?q= 参数
          link.textContent = item.title;
        }
        const excerptEl = div.querySelector('.pagefind-ui__result-excerpt');
        if (excerptEl) {
          excerptEl.innerHTML = highlightText(item.excerpt || '', query);
        }
      } else {
        div = document.createElement('div');
        div.className = 'pagefind-ui__result manual-injected';
        div.innerHTML = `
          <div class="pagefind-ui__result-inner">
            <a class="pagefind-ui__result-link" href="${appendQueryParam(item.url, query)}">${item.title}</a>
            <p class="pagefind-ui__result-excerpt">${highlightText(item.excerpt || '', query)}</p>
          </div>`;
      }
      container.insertBefore(div, container.firstChild);
    });

    // 强制更新计数（立即执行，并持续监控）
    // 初始更新计数
    updateCounter(container);
  }

  function updateCounter(container) {
    const countEl = document.querySelector('.pagefind-ui__results-count');
    if (!countEl || !container) return;
    const total = container.querySelectorAll('.pagefind-ui__result').length;
    const expected = `找到 ${total} 个结果`;
    if (countEl.textContent !== expected) {
      countEl.textContent = expected;
    }
  }

  // 启动计数保护
  function startCounterGuard() {
    const countEl = document.querySelector('.pagefind-ui__results-count');
    if (!countEl || countEl.dataset.guardReady) return;
    countEl.dataset.guardReady = '1';
    
    const container = document.querySelector('.pagefind-ui__results');
    if (!container) return;

    const guard = new MutationObserver(() => {
      const query = (new URLSearchParams(window.location.search)).get('q')?.trim();
      if (!query || !missingWords[query]) return;
      const total = container.querySelectorAll('.pagefind-ui__result').length;
      const expected = `找到 ${total} 个结果`;
      if (countEl.textContent !== expected) {
        countEl.textContent = expected;
      }
    });
    guard.observe(countEl, { childList: true, characterData: true, subtree: true });
  }

  // 定时注入（保留原有逻辑）
  const timer = setInterval(() => {
    if (document.querySelector('.pagefind-ui__results .manual-injected')) {
      clearInterval(timer);
      startCounterGuard();  // 注入成功后启动保护
      return;
    }
    injectAllAndFixCounter();
  }, 300);
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