
# Exibe mensagens com cores
function Show-Message($message, $color = "Green") {
    Write-Host $message -ForegroundColor $color
}

Show-Message "🔍 Instalando dependências..." "Yellow"
npm install

Show-Message "🏗️ Gerando build do Vite..." "Yellow"
npm run build

Show-Message "📂 Movendo build para pasta docs..." "Yellow"
if (Test-Path "docs") {
    Remove-Item -Recurse -Force "docs"
}
Rename-Item -Path "dist" -NewName "docs"

Show-Message "✅ Fazendo commit e enviando para o GitHub..." "Yellow"
git add docs
git commit -m "Deploy automático para GitHub Pages"
git push origin main

Show-Message "🚀 Deploy concluído! Verifique em: https://paulo198019.github.io/Apolo/" "Green"
