# 🚀 Guía de Publicación en GitHub

## ✅ Pasos Completados:
- ✓ Repositorio Git inicializado
- ✓ Archivos añadidos al staging
- ✓ Commit inicial creado
- ✓ .gitignore configurado
- ✓ README.md creado

## 📝 Próximos Pasos:

### 1. Crear Repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `regalo-especial` (o el que prefieras)
3. Descripción: "Una experiencia web romántica"
4. **NO marques** "Add a README file"
5. Click "Create repository"

### 2. Conectar y Subir (ejecuta estos comandos)

```bash
# Reemplaza TU-USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/regalo-especial.git
git branch -M main
git push -u origin main
```

### 3. Publicar con GitHub Pages
1. En tu repo → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: "main" → carpeta "/ (root)"
4. Save

Tu sitio estará en: `https://TU-USUARIO.github.io/regalo-especial/`

---

**Nota**: Necesitarás tener Git configurado con tu usuario:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```
