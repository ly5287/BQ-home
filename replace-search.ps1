# 替换 public/search/index.html 中的内容为 Pagefind 搜索界面
$file = "public\search\index.html"
if (Test-Path $file) {
    $content = Get-Content $file -Raw -Encoding UTF8
    # 找到 <main id="R-body-inner"...> 和 </main> 之间的内容
    $pattern = '(?s)(<main id="R-body-inner".*?>)(.*?)(</main>)'
    $replacement = @'
$1
<div class="post-content" style="margin-top: 2rem;">
    <h1>&#x641C;&#x7D22;</h1>
    <div id="pagefind-search"></div>
    <link href="/pagefind/pagefind-ui.css" rel="stylesheet">
    <script src="/pagefind/pagefind-ui.js"></script>
    <script>
        window.addEventListener('DOMContentLoaded', function() {
    if (typeof PagefindUI === 'undefined') {
        console.error('PagefindUI not loaded');
        document.getElementById('pagefind-search').innerHTML = '<p style="color:red;">Search failed to load, please refresh.</p>';
        return;
    }
    console.log('PagefindUI loaded, initializing...');
    // 初始化 Pagefind UI
    new PagefindUI({ element: "#pagefind-search", showSubResults: false, showImages: false });
    
    // 获取 URL 参数
    var urlParams = new URLSearchParams(window.location.search);
    var q = urlParams.get('q');
    console.log('Query param q:', q);
    if (q && q.trim() !== "") {
        // 轮询等待输入框出现，最多 3 秒，间隔 200ms
        var maxAttempts = 15;
        var attempt = 0;
        var interval = setInterval(function() {
            var input = document.querySelector('.pagefind-ui__search-input');
            if (input) {
                clearInterval(interval);
                input.value = q;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                console.log('Search query set:', q);
            } else {
                console.log('Attempt', attempt+1, ': input not found yet');
            }
            attempt++;
            if (attempt >= maxAttempts) {
                clearInterval(interval);
                console.warn('Pagefind input not found after waiting');
            }
        }, 200);
    }
});
    </script>
</div>
$3
'@
    $newContent = $content -replace $pattern, $replacement
    # 使用无 BOM 的 UTF-8 编码写入文件
    $utf8NoBom = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($file, $newContent, $utf8NoBom)
    Write-Host "已成功替换 $file"
} else {
    Write-Host "未找到 $file"
}