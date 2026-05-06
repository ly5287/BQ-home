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