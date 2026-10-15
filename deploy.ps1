$ErrorActionPreference = "Stop"

# Wpisz nazwę nowego repozytorium
$repo = Read-Host "Nazwa nowego repozytorium"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "Zainstaluj GitHub CLI: https://cli.github.com/"
    exit 1
}

gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Najpierw zaloguj się poleceniem: gh auth login"
    exit 1
}

git init
git add .

git commit -m "Pierwsza wersja projektu"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Sprawdź, czy projekt zawiera pliki do zapisania."
    exit 1
}

git branch -M main

gh repo create $repo --public --source=. --remote=origin --push
if ($LASTEXITCODE -ne 0) {
    Write-Host "Nie udało się utworzyć repozytorium."
    exit 1
}

Write-Host "Repozytorium utworzone i pliki wysłane!"
Write-Host "Włącz Pages w Settings > Pages."