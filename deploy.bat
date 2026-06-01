@echo off
cd /d F:\bq\_website\mywebsite
git add .
git commit -m "电脑更新 %date% %time%"
git push origin main
pause