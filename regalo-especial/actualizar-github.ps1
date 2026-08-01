# Script para ACTUALIZAR el repositorio en GitHub con todas las carpetas
# Ejecuta este script en una NUEVA terminal PowerShell

Write-Host "🔄 Actualizando repositorio en GitHub..." -ForegroundColor Cyan

# Verificar que estamos en el directorio correcto
$currentDir = Get-Location
Write-Host "`n📁 Directorio actual: $currentDir" -ForegroundColor Yellow

# Verificar estado de Git
Write-Host "`n📊 Verificando estado del repositorio..." -ForegroundColor Yellow
git status

# Añadir TODOS los archivos y carpetas (incluyendo las que faltaban)
Write-Host "`n➕ Añadiendo TODOS los archivos y carpetas..." -ForegroundColor Yellow
git add -A

# Verificar qué se va a subir
Write-Host "`n📋 Archivos que se subirán:" -ForegroundColor Yellow
git status

# Crear commit con los cambios
Write-Host "`n💾 Creando commit..." -ForegroundColor Yellow
git commit -m "Add: Todas las carpetas del proyecto (css, js, img, video, sound)"

# Subir a GitHub
Write-Host "`n🚀 Subiendo a GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "`n✅ ¡Repositorio actualizado exitosamente!" -ForegroundColor Green
Write-Host "`n🌐 Verifica tu repositorio en:" -ForegroundColor Cyan
Write-Host "   https://github.com/tsanchez-19/regalo-especial" -ForegroundColor White
Write-Host "`n📝 Las carpetas que deberías ver:" -ForegroundColor Yellow
Write-Host "   - css/ (archivos de estilos)" -ForegroundColor White
Write-Host "   - js/ (archivos JavaScript)" -ForegroundColor White
Write-Host "   - img/ (imágenes)" -ForegroundColor White
Write-Host "   - video/ (videos)" -ForegroundColor White
Write-Host "   - sound/ (audio)" -ForegroundColor White
Write-Host "`n🎯 Si aún no has activado GitHub Pages:" -ForegroundColor Yellow
Write-Host "   1. Ve a: https://github.com/tsanchez-19/regalo-especial/settings/pages" -ForegroundColor White
Write-Host "   2. Source: 'main' y '/ (root)'" -ForegroundColor White
Write-Host "   3. Click 'Save'" -ForegroundColor White
Write-Host "   4. Tu sitio estará en: https://tsanchez-19.github.io/regalo-especial/" -ForegroundColor White

Read-Host "`nPresiona Enter para cerrar"
