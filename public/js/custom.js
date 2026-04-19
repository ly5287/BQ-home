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
  // 只处理文章主体区域内的段落，避免影响侧边栏等
  const articleBody = document.querySelector('#R-body-inner');
  if (!articleBody) return;

  const paragraphs = articleBody.querySelectorAll('p');
  
  paragraphs.forEach(p => {
    // 跳过已经由 Hugo 模板包裹过颜色的段落（可选）
    // if (p.querySelector('span[style*="color"]')) return;

    // 获取段落内部 HTML
    let html = p.innerHTML;
    
    // 正则匹配：<strong>前缀：</strong> 后跟任意内容，直到遇到 <br> 或段落结束
    // 分别处理白起和玩家前缀
    const baiqiRegex = /(<strong>白起[：:]<\/strong>)([^<]*(?:<(?!br\s*\/?>)[^<]*)*)(?=<br\s*\/?>|$)/gi;
    const playerRegex = /(<strong>(?:&ldquo;玩家名称&rdquo;|“玩家名称”|"玩家名称"|\[玩家姓名\])[：:]<\/strong>)([^<]*(?:<(?!br\s*\/?>)[^<]*)*)(?=<br\s*\/?>|$)/gi;

    // 替换白起对话为蓝色
    html = html.replace(baiqiRegex, (match, strong, content) => {
      return `<span style="color: #1c90f3;">${strong}${content}</span>`;
    });

    // 替换玩家对话为金色
    html = html.replace(playerRegex, (match, strong, content) => {
      return `<span style="color: #E2B245;">${strong}${content}</span>`;
    });

    p.innerHTML = html;
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