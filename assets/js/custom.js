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