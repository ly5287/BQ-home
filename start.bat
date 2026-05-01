@echo off
cd /d F:\bq\_website\mywebsite
hugo --baseURL http://localhost:3001/
.\pagefind_extended.exe --site public
cd public
http-server -p 3001 -c-1
pause