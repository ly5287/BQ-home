@echo off
cd /d F:\bq\_website\mywebsite
hugo --baseURL http://localhost:3001/
rd /s /q public\js\lunr
del public\searchindex.zh.js
rd /s /q public\pagefind
.\pagefind_extended.exe --site public
cd public
http-server -p 3001 -c-1
pause