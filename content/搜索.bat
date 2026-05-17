@echo off
chcp 65001 >nul
:: 修改这里为你的关键词
set "kw=棕色"

powershell -NoProfile -Command "$Encoding=[System.Text.Encoding]::UTF8;$p='%kw%';$r=Get-ChildItem -Recurse -Filter *.md | Select-String -Pattern $p;if($r){$r | ForEach-Object {Write-Host $_.Path};$f=($r|Select-Object Path -Unique).Count;$n=$r.Count;Write-Host '';Write-Host '————————————————';Write-Host 涉及文件：$f 个;Write-Host 匹配总数：$n 处;}else{Write-Host 未找到相关内容;}"

echo.
pause