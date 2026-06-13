@echo off
cd /d F:\bq\_website\mywebsite
git add .
git commit -m "update %date% %time%"
git push origin main
pause