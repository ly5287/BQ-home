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

  /**
   * 检测 HTML 片段是否以特定角色的对话开头，并上色
   */
  function colorizeLine(htmlSnippet) {
    // 白起（蓝色）
    if (/^\s*<strong>白起[：:]<\/strong>/i.test(htmlSnippet)) {
      return `<span style="color: #1c90f3;">${htmlSnippet}</span>`;
    }
    // 玩家（金色）
    if (/^\s*<strong>(?:&ldquo;玩家名称&rdquo;|“玩家名称”|"玩家名称"|\[玩家姓名\])[：:]<\/strong>/i.test(htmlSnippet)) {
      return `<span style="color: #E2B245;">${htmlSnippet}</span>`;
    }
    // 其他角色或叙述，原样返回
    return htmlSnippet;
  }

  const elements = articleBody.querySelectorAll('p, li');
  elements.forEach(el => {
    let html = el.innerHTML;

    // 按 <br> 或 <br/> 或 <br /> 分割，并保留分割符
    const parts = html.split(/(<br\s*\/?>)/gi);
    let newHtml = '';

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      // 如果是 <br> 标签本身，直接保留
      if (/^<br\s*\/?>$/i.test(part)) {
        newHtml += part;
      } else {
        // 对非 <br> 的片段进行上色判断
        newHtml += colorizeLine(part);
      }
    }

    el.innerHTML = newHtml;
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

  function loadFulltextIndex() {
    if (fulltextData || isLoading) return;
    isLoading = true;
    fetch('/fulltext.json')
      .then(res => res.json())
      .then(data => {
        fulltextData = data;
        window.fulltextData = fulltextData;
        console.log('全文本索引加载完成，共', data.length, '个页面');
        const q = getCurrentQuery();
        if (q) injectFulltextResults(q);
      })
      .catch(() => console.warn('全文本索引加载失败'))
      .finally(() => isLoading = false);
  }

  function getCurrentQuery() {
    loadFulltextIndex();  // 确保索引开始加载
    const urlQ = (new URLSearchParams(window.location.search)).get('q')?.trim();
    if (urlQ) return urlQ;
    const input = document.querySelector('.pagefind-ui__search-input');
    return input?.value?.trim() || '';
  }

  function updateURLQuery(query) {
    const url = new URL(window.location);
    if (query) {
      url.searchParams.set('q', query);
    } else {
      url.searchParams.delete('q');
    }
    history.replaceState(null, '', url.toString());
  }

  function injectFulltextResults(query, waitCount = 0) {
    if (!query) return;
    if (!fulltextData || fulltextData.length === 0) return;

    const container = document.querySelector('.pagefind-ui__results');
    if (!container) {
      if (waitCount < 25) {
        setTimeout(() => injectFulltextResults(query, waitCount + 1), 200);
      }
      return;
    }

    if (injectFulltextResults._lastQuery === query) return;
    injectFulltextResults._lastQuery = query;

    console.log('injectFulltextResults 被调用，fulltextData:', !!fulltextData, 'query:', query);

    // 隐藏原 Pagefind 消息，创建自定义统计栏
    const messageEl = document.querySelector('.pagefind-ui__message');
    if (messageEl) messageEl.style.display = 'none';

    let statsBar = document.getElementById('custom-search-stats');
    if (!statsBar) {
      statsBar = document.createElement('div');
      statsBar.id = 'custom-search-stats';
      statsBar.style.cssText = 'margin-bottom:1em;padding:0.5em;background:#f5f5f5;border-radius:4px;font-size:0.9em;';
      container.parentNode.insertBefore(statsBar, container);
    }

    function updateStatsBar() {
      if (!statsBar) return;
      const visibleTotal = Array.from(container.querySelectorAll('.pagefind-ui__result'))
        .filter(el => getComputedStyle(el).display !== 'none').length;
      const stats = injectFulltextResults.lastStats || { totalMatched: 0 };
      statsBar.textContent = `找到 ${visibleTotal} 个结果（其中精准匹配 ${stats.totalMatched} 条）`;
    }

    // 清除旧的轮询
    if (injectFulltextResults.hideInterval) {
      clearInterval(injectFulltextResults.hideInterval);
      injectFulltextResults.hideInterval = null;
    }

    // 全局匹配路径
    if (!injectFulltextResults.matchedPaths) {
      injectFulltextResults.matchedPaths = new Set();
    }
    const matchedPaths = injectFulltextResults.matchedPaths;

    // MutationObserver：自动隐藏后续原生重复条目，并立即更新统计和层级
    if (!injectFulltextResults.observer) {
      injectFulltextResults.observer = new MutationObserver(() => {
        container.querySelectorAll('.pagefind-ui__result:not(.fulltext-injected)').forEach(el => {
          const a = el.querySelector('a[href]');
          if (a) {
            try {
              const elPath = new URL(a.href, location.origin).pathname.replace(/\/$/, '');
              if (matchedPaths.has(elPath)) {
                el.style.display = 'none';
              }
            } catch(e) {}
          }
        });
        if (window.addBreadcrumbs) window.addBreadcrumbs();
        updateStatsBar();
      });
      injectFulltextResults.observer.observe(container, { childList: true, subtree: true });
    }

    // 清除旧的注入结果
    container.querySelectorAll('.fulltext-injected').forEach(el => el.remove());

    // 收集全文本匹配的页面
    const matchedFulltextPaths = new Set();
    const allMatches = fulltextData.filter(page => {
      try {
        const text = (page.title + ' ' + page.content).toLowerCase();
        if (text.includes(query.toLowerCase())) {
          const pagePath = new URL(page.url, location.origin).pathname.replace(/\/$/, '');
          matchedFulltextPaths.add(pagePath);
          return true;
        }
      } catch(e) {}
      return false;
    });
    matchedPaths.clear();
    matchedFulltextPaths.forEach(p => matchedPaths.add(p));

    // 隐藏当前所有匹配的原生条目
    container.querySelectorAll('.pagefind-ui__result:not(.fulltext-injected)').forEach(el => {
      const a = el.querySelector('a[href]');
      if (a) {
        try {
          const elPath = new URL(a.href, location.origin).pathname.replace(/\/$/, '');
          if (matchedFulltextPaths.has(elPath)) {
            el.style.display = 'none';
          }
        } catch(e) {}
      }
    });

    // 轮询兜底隐藏（保留，但基本由 Observer 完成）
    if (!injectFulltextResults.hideInterval) {
      let unchangedCount = 0;
      injectFulltextResults.hideInterval = setInterval(() => {
        let hiddenAny = false;
        container.querySelectorAll('.pagefind-ui__result:not(.fulltext-injected)').forEach(el => {
          const a = el.querySelector('a[href]');
          if (a) {
            try {
              const elPath = new URL(a.href, location.origin).pathname.replace(/\/$/, '');
              if (matchedFulltextPaths.has(elPath)) {
                el.style.display = 'none';
                hiddenAny = true;
              }
            } catch(e) {}
          }
        });
        if (hiddenAny) {
          unchangedCount = 0;
          updateStatsBar();
        } else {
          unchangedCount++;
          if (unchangedCount >= 3) {
            clearInterval(injectFulltextResults.hideInterval);
            injectFulltextResults.hideInterval = null;
          }
        }
      }, 300);
    }

    // 注入结果（每个 URL 仅一次）
    const injectedPaths = new Set();
    const matches = allMatches.filter(page => {
      const pagePath = new URL(page.url, location.origin).pathname.replace(/\/$/, '');
      if (injectedPaths.has(pagePath)) return false;
      injectedPaths.add(pagePath);
      return true;
    });

    console.log('allMatches 数量:', allMatches.length, 'matches 数量:', matches.length);

    injectFulltextResults.lastStats = { totalMatched: allMatches.length };

    if (matches.length === 0) {
      updateStatsBar();
      return;
    }

    const template = container.querySelector('.pagefind-ui__result:not(.fulltext-injected)');
    const fragment = document.createDocumentFragment();

    matches.forEach(page => {
      const div = template ? template.cloneNode(true) : document.createElement('div');
      div.classList.add('fulltext-injected');
      div.style.display = '';
      div.classList.add('breadcrumb-added');
      // 彻底删除所有加载占位元素
      div.querySelectorAll('.pagefind-ui__loading').forEach(el => el.remove());
      
      // 清空标题容器并获取引用
      const titleEl = div.querySelector('.pagefind-ui__result-title');
      if (titleEl) titleEl.innerHTML = '';

      // 设置链接
      let link = div.querySelector('a[href]');
      if (!link && titleEl) {
        link = document.createElement('a');
        link.className = 'pagefind-ui__result-link';
        titleEl.appendChild(link);
      } else if (!link) {
        const inner = div.querySelector('.pagefind-ui__result-inner') || div;
        inner.innerHTML = '';
        const p = document.createElement('p');
        p.className = 'pagefind-ui__result-title';
        link = document.createElement('a');
        link.className = 'pagefind-ui__result-link';
        p.appendChild(link);
        inner.appendChild(p);
      }
      if (link) {
        const sep = page.url.includes('?') ? '&' : '?';
        link.href = page.url + sep + 'q=' + encodeURIComponent(query);
        link.textContent = page.title;
        link.style.fontWeight = 'bold'; 
      }

      // 生成摘要
      let excerptEl = div.querySelector('.pagefind-ui__result-excerpt');
      if (!excerptEl) {
        const inner = div.querySelector('.pagefind-ui__result-inner') || div;
        excerptEl = document.createElement('p');
        excerptEl.className = 'pagefind-ui__result-excerpt';
        inner.appendChild(excerptEl);
      }

      const idx = page.content.toLowerCase().indexOf(query.toLowerCase());
      if (idx !== -1) {
        const start = Math.max(0, idx - 20);
        const end = Math.min(page.content.length, idx + query.length + 20);
        let snippet = page.content.substring(start, end);
        if (start > 0) snippet = '…' + snippet;
        if (end < page.content.length) snippet += '…';
        snippet = snippet.replace(
          new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
          '<mark class="search">$&</mark>'
        );
        excerptEl.innerHTML = snippet;
      } else {
        excerptEl.textContent = page.content.substring(0, 50) + '…';
      }

      // 层级
      const existingCrumb = div.querySelector('.result-breadcrumb');
      if (existingCrumb) existingCrumb.remove();
      if (typeof window.getBreadcrumb === 'function') {
        const crumbText = window.getBreadcrumb(page.url);
        if (crumbText) {
          const crumbDiv = document.createElement('div');
          crumbDiv.className = 'result-breadcrumb';
          crumbDiv.textContent = crumbText;
          const inner = div.querySelector('.pagefind-ui__result-inner') || div;
          const titleLink = inner.querySelector('a[href]');
          if (titleLink) {
            titleLink.parentNode.insertAdjacentElement('afterend', crumbDiv);
          } else {
            inner.appendChild(crumbDiv);
          }
        }
      }

      fragment.appendChild(div);
    });

    container.insertBefore(fragment, container.firstChild);
    updateStatsBar();
  }

  function bindSearchTrigger() {
    const input = document.querySelector('.pagefind-ui__search-input');
    if (!input) {
      setTimeout(bindSearchTrigger, 300);
      return;
    }


    // 首次聚焦搜索框时加载索引
    input.addEventListener('focus', function() {
      loadFulltextIndex();
    }, { once: true });


    const initialQ = getCurrentQuery();
    if (initialQ) {
      input.value = initialQ;
      injectFulltextResults(initialQ);
    }

if (initialQ && !fulltextData) {
  const waitForData = setInterval(() => {
    if (fulltextData) {
      clearInterval(waitForData);
      injectFulltextResults(initialQ);
    }
  }, 200);
}


    window.addEventListener('pageshow', function(event) {
      const currentQ = getCurrentQuery();
      if (currentQ) {
        input.value = currentQ;
        injectFulltextResults(currentQ);
      } else {
        input.value = '';
        injectFulltextResults._lastQuery = '';
      }
    });

    window.addEventListener('popstate', function() {
      const q = getCurrentQuery();
      if (q) {
        input.value = q;
        injectFulltextResults(q);
      }
    });

    let debounceTimer;
    input.addEventListener('input', function() {
      const query = this.value.trim();
      updateURLQuery(query);
      clearTimeout(debounceTimer);
      if (!query) {
        injectFulltextResults._lastQuery = '';
        return;
      }
      debounceTimer = setTimeout(() => {
        if (!fulltextData) {
          const waitForData = setInterval(() => {
            if (fulltextData) {
              clearInterval(waitForData);
              injectFulltextResults(query);
            }
          }, 200);
        } else {
          injectFulltextResults(query);
        }
      }, 800);
    });

    document.addEventListener('click', function(e) {
      if (e.target.matches('.pagefind-ui__load-more') || e.target.closest('.pagefind-ui__load-more')) {
        setTimeout(() => {
          if (fulltextData) {
            const q = getCurrentQuery();
            if (q) injectFulltextResults(q);
          }
        }, 500);
      }
    });
  }

//   loadFulltextIndex();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindSearchTrigger);
  } else {
    bindSearchTrigger();
  }

  window.injectFulltextResults = injectFulltextResults;
  window.preciseSearch = function(query) {
    if (!window.fulltextData || !query) return [];
    var allMatches = window.fulltextData.filter(function(page) {
      return (page.title + ' ' + page.content).toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // 转为片段列表（多匹配）
    var fragments = [];
    allMatches.forEach(function(page) {
      var content = page.content;
      var lowerContent = content.toLowerCase();
      var queryLower = query.toLowerCase();
      var pos = lowerContent.indexOf(queryLower);
      var count = 0;
      while (pos !== -1 && count < 10) {
        var start = Math.max(0, pos - 40);
        var end = Math.min(content.length, pos + queryLower.length + 60);
        var snippet = content.substring(start, end);
        if (start > 0) snippet = '…' + snippet;
        if (end < content.length) snippet += '…';
        fragments.push({
          page: page,
          excerpt: snippet,
          matchIndex: count,
          _start: pos,                    // 匹配起始位置
          _end: pos + queryLower.length   // 匹配结束位置
        });
        count++;
        pos = lowerContent.indexOf(queryLower, pos + 1);
      }
      if (count === 0) {
        fragments.push({ page: page, excerpt: page.content.substring(0, 80) + '…', matchIndex: 0 });
      }
    });
    // 合并相邻片段（间隔小于 40 个字符则合并）
    var merged = [];
    fragments.forEach(function(frag) {
      var last = merged[merged.length - 1];
      if (last && last.page.url === frag.page.url && (frag._start - last._end) < 40) {
        // 与上一个片段相邻：扩展合并范围
        last._end = frag._end; // 扩展结束位置
        // 重新生成合并后的摘要
        var start = Math.max(0, last._start - 40);
        var end = Math.min(last.page.content.length, last._end + 40);
        var snippet = last.page.content.substring(start, end);
        if (start > 0) snippet = '…' + snippet;
        if (end < last.page.content.length) snippet += '…';
        last.excerpt = snippet;
        // 保持 matchIndex 不变（仍为上一个片段的 matchIndex）
      } else {
        // 非相邻：直接加入
        merged.push({
          page: frag.page,
          excerpt: frag.excerpt,
          matchIndex: frag.matchIndex,
          _start: frag._start,
          _end: frag._end
        });
      }
    });
    // 保留原始匹配总数
    merged.totalMatches = fragments.length;
    return merged;
  };
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
    part = decodeURIComponent(part);
    part = part.replace(/^\d+\./, '');
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

      var title = el.querySelector('.pagefind-ui__result-title');
      if (title) {
        title.parentNode.insertBefore(crumb, title.nextSibling);
      } else {
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
  window.addBreadcrumbs = addAll;
})();

// 侧边栏搜索跳转（适配无按钮结构）
(function() {
  var input = document.querySelector('#R-search-by');
  var icon = document.querySelector('.searchbox .fa-search');
  if (!input) return;

  function doSearch() {
    var q = input.value.trim();
    if (q) {
      window.location.href = '/search/?q=' + encodeURIComponent(q);
    }
  }

  // 回车键跳转
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      doSearch();
    }
  });

  // 点击搜索图标跳转
  if (icon) {
    icon.style.cursor = 'pointer'; // 提示可点击
    icon.addEventListener('click', doSearch);
  }
})();







// ========== 搜索模式管理（独立精准搜索） ==========
(function() {
  var currentMode = 'default';
  var scopePrefixes = {
    "约会": "/1.%E7%BA%A6%E4%BC%9A/",
    "讯息": "/2.%E8%AE%AF%E6%81%AF/",
    "主线": "/3.%E4%B8%BB%E7%BA%BF/",
    "杂篇": "/4.%E6%9D%82%E7%AF%87/",
    "外编": "/5.%E5%A4%96%E7%BC%96/"
  };
  var pagefindContainer = document.getElementById('pagefind-search');
  var preciseContainer = document.getElementById('precise-search-container');
  var preciseInput = null;
  var preciseResultsDiv = null;

  // 清空精准搜索结果
  function clearPreciseResults() {
    if (preciseResultsDiv) preciseResultsDiv.innerHTML = '';
    var statsDiv = document.querySelector('.precise-search-stats');
    if (statsDiv) statsDiv.style.display = 'none';
  }

  // 更新局部搜索（按栏目过滤）
  function updateLocalSearch() {
    if (!preciseInput || !preciseResultsDiv) return;
    var query = preciseInput.value.trim();
    var statsDiv = document.querySelector('.precise-search-stats');
    if (!query) {
      preciseResultsDiv.innerHTML = '';
      if (statsDiv) statsDiv.style.display = 'none';
      return;
    }
    var selectedScope = document.getElementById('scope-selector')?.value;
    if (!selectedScope) {
      renderPreciseResults([], query);
      return;
    }
    var prefix = scopePrefixes[selectedScope];
    if (!prefix) {
      renderPreciseResults([], query);
      return;
    }
    var allFragments = window.preciseSearch(query);
    var filtered = allFragments.filter(function(frag) {
      return frag.page.url.indexOf(prefix) === 0;
    });
    renderPreciseResults(filtered, query);
  }

  // 切换模式
  function setMode(mode) {
    currentMode = mode;
    window.searchMode = mode;

    if (mode === 'default') {
      // 显示 Pagefind，隐藏精准搜索
      if (pagefindContainer) pagefindContainer.style.display = '';
      if (preciseContainer) preciseContainer.style.display = 'none';
      var container = document.querySelector('.pagefind-ui__results');
      if (container) {
        container.querySelectorAll('.pagefind-ui__result').forEach(function(el) {
          el.style.display = '';
        });
      }
      var q = (new URLSearchParams(location.search)).get('q')?.trim();
      if (q && window.injectFulltextResults) {
        window.injectFulltextResults(q);
      }
    } else {
      // 隐藏 Pagefind，显示精准搜索
      if (pagefindContainer) pagefindContainer.style.display = 'none';
      if (preciseContainer) {
        preciseContainer.style.display = '';
        if (!preciseInput) {
          preciseInput = preciseContainer.querySelector('.precise-search-input');
          preciseResultsDiv = preciseContainer.querySelector('.precise-search-results');
          var clearBtn = preciseContainer.querySelector('.precise-search-clear');
          var statsDiv = preciseContainer.querySelector('.precise-search-stats');
          // 绑定输入事件
          preciseInput.addEventListener('input', function() {
            var query = this.value.trim();
            if (clearBtn) clearBtn.style.display = query ? 'inline-block' : 'none';
            if (!query) {
              preciseResultsDiv.innerHTML = '';
              if (statsDiv) statsDiv.style.display = 'none';
              return;
            }
            if (currentMode === 'local') {
              updateLocalSearch();
            } else {
              var fragments = window.preciseSearch(query);
              renderPreciseResults(fragments, query);
            }
          });
        }
        var scopeSelector = document.getElementById('scope-selector');
        if (mode === 'local') {
          if (scopeSelector) {
            scopeSelector.style.display = '';
            if (scopeSelector.options.length <= 1) {
              Object.keys(scopePrefixes).forEach(function(name) {
                var opt = document.createElement('option');
                opt.value = name;
                opt.textContent = name;
                scopeSelector.appendChild(opt);
              });
              scopeSelector.onchange = function() {
                updateLocalSearch();
              };
            }
          }
          var q = (new URLSearchParams(location.search)).get('q')?.trim();
          if (q) {
            preciseInput.value = q;
            updateLocalSearch();
          } else {
            preciseInput.value = '';
            clearPreciseResults();
          }
        } else {
          if (scopeSelector) scopeSelector.style.display = 'none';
          var q = (new URLSearchParams(location.search)).get('q')?.trim();
          if (q) {
            preciseInput.value = q;
            var fragments = window.preciseSearch(q);
            renderPreciseResults(fragments, q);
          } else {
            preciseInput.value = '';
            clearPreciseResults();
          }
        }
      }
    }
  }

  // 渲染精准结果（按页面分组，多预览）
function renderPreciseResults(fragments, query) {
  if (!preciseResultsDiv) return;
  var statsDiv = document.querySelector('.precise-search-stats');
  
  if (!fragments || fragments.length === 0) {
    preciseResultsDiv.innerHTML = '';
    if (statsDiv) statsDiv.style.display = 'none';
    return;
  }

  // 按页面分组
  var pagesMap = {};
  fragments.forEach(function(frag) {
    var url = frag.page.url;
    if (!pagesMap[url]) {
      pagesMap[url] = { page: frag.page, excerpts: [] };
    }
    pagesMap[url].excerpts.push(frag.excerpt);
  });

  var pageCount = Object.keys(pagesMap).length;
  var totalMatches = fragments.totalMatches || fragments.length;

  // 更新统计栏（只此一处）
  if (statsDiv) {
    statsDiv.textContent = '共找到 ' + pageCount + ' 个页面，精准匹配 ' + totalMatches + ' 处';
    statsDiv.style.display = '';
  }

  // 构建结果 HTML（不包含统计行）
  var html = '';
  var pageKeys = Object.keys(pagesMap);
  for (var i = 0; i < pageKeys.length; i++) {
    var key = pageKeys[i];
    var group = pagesMap[key];
    var page = group.page;
    var url = page.url + (page.url.includes('?') ? '&' : '?') + 'q=' + encodeURIComponent(query);
    var breadcrumb = (typeof window.getBreadcrumb === 'function') ? window.getBreadcrumb(page.url) : '';

    html += '<div style="margin-bottom:1.5em;border-bottom:1px solid #eee;padding-bottom:1em;">';
    html += '<a href="' + url + '" style="font-size:1.1em;font-weight:bold;">' + page.title + '</a>';
    if (breadcrumb) {
      html += '<div style="color:#888;font-size:0.85em;margin-top:0.2em;">' + breadcrumb + '</div>';
    }
    for (var j = 0; j < group.excerpts.length; j++) {
      var excerpt = group.excerpts[j].replace(
        new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
        '<mark class="search">$&</mark>'
      );
html += '<p style="color:#555;margin:0.3em 0 0 0;"><span style="font-weight:bold;color:#000;margin-right:0.4em;">' + (j + 1) + '.</span>' + excerpt + '</p>';
    }
    html += '</div>';
  }

  preciseResultsDiv.innerHTML = html;
}

  // 初始化卡片
  function init() {
    var cards = document.querySelectorAll('.mode-card');
    if (!cards.length) return;

    // 默认选中第一个卡片
    cards[0].classList.add('active');
    setMode('default');

    cards.forEach(function(card) {
      // 箭头点击展开/折叠描述
      var arrow = card.querySelector('.mode-arrow');
      if (arrow) {
        arrow.addEventListener('click', function(e) {
          e.stopPropagation(); // 阻止触发卡片点击
          card.classList.toggle('expanded');
        });
      }

      // 卡片点击切换模式
      card.addEventListener('click', function() {
        cards.forEach(function(c) { c.classList.remove('active'); });
        card.classList.add('active');
        setMode(card.dataset.mode);
      });
    });
  }

  // 确保精准搜索函数存在
  if (!window.preciseSearch) {
    console.error('preciseSearch 函数未定义，请先在全文本模块中添加暴露');
    return;
  }

  // 等待容器就绪
  var observer = new MutationObserver(function() {
    if (document.querySelector('.mode-card') && document.getElementById('pagefind-search')) {
      init();
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();