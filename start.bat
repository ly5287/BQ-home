@echo off
cd /d F:\bq\_website\mywebsite
hugo --baseURL http://localhost:3001/
.\pagefind_extended.exe --site public
echo 替换搜索页面...
powershell -ExecutionPolicy Bypass -File replace-search.ps1
cd public
http-server -p 3001 -c-1
pause