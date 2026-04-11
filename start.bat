@echo off
echo 正在构建网站...
hugo
echo 正在生成 Pagefind 索引...
.\pagefind_extended.exe --site public
echo 强制复制正确的 search.html...
copy /Y static\search.html public\search.html
echo 启动本地服务器，请访问 http://localhost:3001/search.html
cd public
http-server -p 3001 -c-1
pause