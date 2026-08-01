# 🎯 Guía Visual: Mover Archivos a la Raíz

## ❌ Problema Actual:
Tus archivos están en: `regalo-especial/Señorita/index.html`
Deben estar en: `regalo-especial/index.html`

## ✅ Solución Más Fácil (10 minutos):

### PASO 1: Descargar los Archivos

1. En GitHub, click en la carpeta **"Señorita"**
2. Click en el botón verde **"Code"** (arriba a la derecha)
3. Click en **"Download ZIP"**
4. Guarda el archivo y **descomprímelo**
5. Abre la carpeta descomprimida → entra a la carpeta **"Señorita"**
6. Verás todos tus archivos (css, js, img, video, etc.)

### PASO 2: Borrar Contenido Actual del Repositorio

1. Ve a: https://github.com/tsanchez-19/regalo-especial
2. Click en la carpeta **"Señorita"**
3. Click en los **3 puntos** (...) arriba a la derecha
4. Click en **"Delete directory"**
5. Escribe el mensaje: "Delete Señorita folder"
6. Click **"Commit changes"**

También borra los archivos sueltos si hay:
- README.md
- DEPLOYMENT.md
- Cualquier otro archivo en la raíz

### PASO 3: Subir Archivos Correctamente

1. Ve a: https://github.com/tsanchez-19/regalo-especial
2. Click en **"Add file"** → **"Upload files"**
3. Abre la carpeta que descomprimiste → **entra a "Señorita"**
4. Selecciona **TODO** (Ctrl+A):
   - index.html
   - Carpeta css/
   - Carpeta js/
   - Carpeta img/
   - Carpeta video/
   - Carpeta sound/
   - README.md
   - .gitignore
   - Todos los demás archivos
5. **Arrastra TODO** a la página de GitHub
6. Espera a que se suban (verás una barra de progreso)
7. Commit message: "Fix: Mover archivos a la raíz"
8. Click **"Commit changes"**

### PASO 4: Verificar

1. Ve a: https://github.com/tsanchez-19/regalo-especial
2. Ahora debes ver **directamente**:
   - ✅ index.html (en la raíz)
   - ✅ css/ (carpeta en la raíz)
   - ✅ js/ (carpeta en la raíz)
   - ✅ img/ (carpeta en la raíz)
   - ✅ video/ (carpeta en la raíz)
   - ✅ sound/ (carpeta en la raíz)
   - ❌ NO debe haber carpeta "Señorita"

### PASO 5: Activar GitHub Pages

1. Ve a: https://github.com/tsanchez-19/regalo-especial/settings/pages
2. En **"Source"**:
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **"Save"**
4. Espera 1-2 minutos
5. Refresca la página
6. Verás: "Your site is live at https://tsanchez-19.github.io/regalo-especial/"

### PASO 6: Visitar tu Sitio

Abre: https://tsanchez-19.github.io/regalo-especial/

¡Debería funcionar perfectamente! 🎉

---

## 📸 Cómo Debe Verse:

**ANTES (Incorrecto):**
```
regalo-especial/
└── Señorita/          ← ❌ Carpeta extra
    ├── index.html
    ├── css/
    └── ...
```

**DESPUÉS (Correcto):**
```
regalo-especial/
├── index.html         ← ✅ Directamente en la raíz
├── css/
├── js/
├── img/
├── video/
└── sound/
```

---

## 🆘 ¿Necesitas Ayuda?

Si tienes algún problema en cualquier paso, avísame y te guío.
