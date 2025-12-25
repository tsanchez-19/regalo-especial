# 🚀 Guía Completa: Subir Proyecto a GitHub

**Repositorio:** https://github.com/tsanchez-19/regalo-especial.git

## ⚠️ Git no está instalado en tu sistema

Tienes 2 opciones:

---

## 📦 OPCIÓN 1: Subir por la Web (MÁS FÁCIL - RECOMENDADO)

### Paso 1: Preparar archivos
1. Ve a la carpeta: `C:\Users\thiag\OneDrive\Documentos\Señorita`
2. Selecciona TODOS los archivos y carpetas
3. Click derecho → **"Comprimir en archivo ZIP"** o **"Enviar a → Carpeta comprimida"**
4. Nombra el archivo: `proyecto.zip`

### Paso 2: Subir a GitHub
1. Ve a: https://github.com/tsanchez-19/regalo-especial
2. Click en **"uploading an existing file"** (link azul en la descripción)
   - O click en **"Add file"** → **"Upload files"**
3. Arrastra el archivo `proyecto.zip` a la página
   - O click en **"choose your files"** y selecciona el ZIP
4. Espera a que se suba
5. En "Commit changes":
   - Mensaje: `Initial commit: Proyecto completo`
6. Click en **"Commit changes"**

### Paso 3: Descomprimir en GitHub
1. Una vez subido el ZIP, click en el archivo `proyecto.zip`
2. Click en **"Download"** para verificar
3. **IMPORTANTE**: Necesitas subir los archivos individuales, no el ZIP

**MEJOR FORMA:**
1. En tu repositorio, click **"Add file"** → **"Upload files"**
2. Abre la carpeta `Señorita` en el explorador
3. Selecciona TODOS los archivos (Ctrl+A)
4. Arrastra TODO a la página de GitHub
5. Commit message: `Initial commit: Proyecto completo`
6. Click **"Commit changes"**

---

## 💻 OPCIÓN 2: Instalar Git (Más Profesional)

### Paso 1: Instalar Git
1. Descarga Git desde: https://git-scm.com/download/win
2. Ejecuta el instalador
3. Usa las opciones por defecto (Next, Next, Install)
4. Reinicia VS Code o tu terminal

### Paso 2: Configurar Git
Abre PowerShell o CMD y ejecuta:
```bash
git config --global user.name "tsanchez-19"
git config --global user.email "tu-email@ejemplo.com"
```

### Paso 3: Subir proyecto
```bash
cd "C:\Users\thiag\OneDrive\Documentos\Señorita"
git init
git add .
git commit -m "Initial commit: Proyecto completo"
git remote add origin https://github.com/tsanchez-19/regalo-especial.git
git branch -M main
git push -u origin main
```

---

## 🌐 Publicar con GitHub Pages

Una vez que los archivos estén en GitHub:

1. Ve a tu repositorio: https://github.com/tsanchez-19/regalo-especial
2. Click en **"Settings"** (arriba a la derecha)
3. En el menú lateral izquierdo, click en **"Pages"**
4. En **"Source"**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**
6. Espera 1-2 minutos
7. Refresca la página
8. Verás un mensaje: **"Your site is live at https://tsanchez-19.github.io/regalo-especial/"**

---

## ✅ Verificación Final

Tu sitio estará disponible en:
**https://tsanchez-19.github.io/regalo-especial/**

¡Comparte este link con quien quieras! 💕

---

## 📝 Notas Importantes

- **OPCIÓN 1** es más rápida si no tienes Git
- **OPCIÓN 2** es mejor para futuras actualizaciones
- GitHub Pages puede tardar 1-5 minutos en publicar
- Si hay errores, verifica que `index.html` esté en la raíz del repositorio

---

**¿Necesitas ayuda?** Avísame en qué paso estás y te guío.
