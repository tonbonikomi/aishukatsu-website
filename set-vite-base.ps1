param(
  [string]$RepoName = "aishukatsu-website",
  [string]$ConfigPath = "vite.config.ts"
)

if (!(Test-Path $ConfigPath)) {
  Write-Error "❌ $ConfigPath が見つかりません。vite.config.ts があるフォルダで実行してください。"
  exit 1
}

$content = Get-Content $ConfigPath -Raw

# バックアップ作成
Copy-Item $ConfigPath "$ConfigPath.bak" -Force

$baseLine = "  base: '/$RepoName/',"

# すでに base があるなら値だけ差し替え
if ($content -match "(?m)^\s*base\s*:\s*['""][^'""]+['""]\s*,?\s*$") {
  $content = [regex]::Replace(
    $content,
    "(?m)^\s*base\s*:\s*['""][^'""]+['""]\s*,?\s*$",
    $baseLine
  )
  Set-Content -Path $ConfigPath -Value $content -Encoding UTF8
  Write-Host "✅ base を更新しました: /$RepoName/"
  exit 0
}

# plugins 行があるなら、その直後に base を挿入
if ($content -match "(?m)^\s*plugins\s*:\s*\[.*\]\s*,?\s*$") {
  $content = [regex]::Replace(
    $content,
    "(?m)^(\s*plugins\s*:\s*\[.*\]\s*,?\s*)$",
    "`$1`r`n$baseLine",
    1
  )
  Set-Content -Path $ConfigPath -Value $content -Encoding UTF8
  Write-Host "✅ plugins の直後に base を追加しました: /$RepoName/"
  exit 0
}

# plugins が見つからない場合：defineConfig({ の直後に base を挿入
if ($content -match "defineConfig\(\s*\{\s*\r?\n") {
  $content = [regex]::Replace(
    $content,
    "defineConfig\(\s*\{\s*\r?\n",
    "defineConfig({`r`n$baseLine`r`n",
    1
  )
  Set-Content -Path $ConfigPath -Value $content -Encoding UTF8
  Write-Host "✅ defineConfig({ の直後に base を追加しました: /$RepoName/"
  exit 0
}

Write-Error "❌ 期待する形式の defineConfig({...}) が見つかりませんでした。vite.config.ts を確認してください。"
exit 1
