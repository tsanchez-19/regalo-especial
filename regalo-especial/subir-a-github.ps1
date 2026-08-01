# Script para subir proyecto a GitHub
# Ejecuta este script DESPUÉS de cerrar y volver a abrir PowerShell

Write-Host "🚀 Configurando Git y subiendo proyecto..." -ForegroundColor Cyan

# Configurar Git
Write-Host "`n📝 Configurando usuario de Git..." -ForegroundColor Yellow
git config --global user.name "tsanchez-19"
git config --global user.email "tsanchez@example.com"

# Inicializar repositorio
Write-Host "`n📦 Inicializando repositorio..." -ForegroundColor Yellow
git init

# Añadir archivos
Write-Host "`n➕ Añadiendo archivos..." -ForegroundColor Yellow
git add .

# Hacer commit
Write-Host "`n💾 Creando commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Proyecto completo con animaciones y efectos visuales"

# Añadir remote
Write-Host "`n🔗 Conectando con GitHub..." -ForegroundColor Yellow
git remote add origin https://github.com/tsanchez-19/regalo-especial.git

# Renombrar rama
Write-Host "`n🌿 Configurando rama principal..." -ForegroundColor Yellow
git branch -M main

# Push a GitHub
Write-Host "`n🚀 Subiendo a GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "`n✅ ¡Proyecto subido exitosamente!" -ForegroundColor Green
Write-Host "`n🌐 Tu sitio estará disponible en:" -ForegroundColor Cyan
Write-Host "   https://tsanchez-19.github.io/regalo-especial/" -ForegroundColor White
Write-Host "`n📝 Ahora ve a GitHub Pages para activar la publicación:" -ForegroundColor Yellow
Write-Host "   1. Ve a: https://github.com/tsanchez-19/regalo-especial/settings/pages" -ForegroundColor White
Write-Host "   2. En 'Source', selecciona 'main' y '/ (root)'" -ForegroundColor White
Write-Host "   3. Click 'Save'" -ForegroundColor White
Write-Host "   4. Espera 1-2 minutos y refresca la página" -ForegroundColor White

Read-Host "`nPresiona Enter para cerrar"
