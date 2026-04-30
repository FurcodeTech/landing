# Furcode Landing

Landing page oficial de **Furcode**, construida con React, Vite y Tailwind CSS.

## Stack
- React
- Vite
- Tailwind CSS
- Node.js

## Requisitos
- Node.js >= 20.19 o >= 22.12
- npm >= 9

## Levantar el proyecto en local
```bash
npm install
npm run dev
```

La aplicación estará disponible en:
http://localhost:5173

En Windows, si PowerShell bloquea `npm.ps1`, usá:
```bash
npm.cmd run dev
```

## Build de producción
```bash
npm run build
```

El output se genera en la carpeta `dist/`.

## Estructura del proyecto
```
src/
 ├─ assets/        # Imágenes, logos, fuentes
 ├─ sections/      # Secciones de la landing
 ├─ App.tsx        # Composición principal
 ├─ index.css      # Estilos globales
 └─ main.tsx       # Punto de entrada React
```

## Deploy
El proyecto está preparado para ser deployado como **Static Site** en Render.

- Build command: `npm run build`
- Publish directory: `dist`
- Rewrite rule: `/* -> /index.html`

## Licencia
Proyecto privado - Furcode.
