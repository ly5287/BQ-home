function fixSearchForm() {
    var form = document.querySelector('#R-header-wrapper .searchbox');
    if (form) {
        // 修改表单属性
        form.action = '/search/';
        form.method = 'get';
        // 修改输入框的 name
        var input = form.querySelector('input[name="search-by"]');
        if (input) {
            input.name = 'q';
        }
        // 移除可能干扰的 data-search-input 属性
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.removeAttribute('data-search-input');
        }
        console.log('搜索表单已被修改，将提交到 /search/?q=...');
    } else {
        setTimeout(fixSearchForm, 100);
    }
}
fixSearchForm();

