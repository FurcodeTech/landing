# Furcode Landing

Landing page oficial de **Furcode**, construida con React, Vite y Tailwind CSS.

## 🧱 Stack
- React
- Vite
- Tailwind CSS
- Node.js

## 📦 Requisitos
- Node.js >= 18
- npm >= 9

## 🚀 Levantar el proyecto en local
```bash
npm install
npm run dev
```

La aplicación estará disponible en:
http://localhost:5173

## 🏗️ Build de producción
```bash
npm run build
```

El output se genera en la carpeta `dist/`.

## 📁 Estructura del proyecto
```
src/
 ├─ assets/        # Imágenes, logos, fuentes
 ├─ components/    # Componentes reutilizables
 ├─ sections/      # Secciones de la landing
 ├─ styles/        # Estilos globales
 ├─ lib/           # Helpers y utilidades
```

## 🌐 Deploy
El proyecto está preparado para ser deployado como **Static Site** en Render.

- Build command: `npm run build`
- Publish directory: `dist`
- Rewrite rule: `/* -> /index.html`

## 📄 Licencia
Proyecto privado – Furcode.
