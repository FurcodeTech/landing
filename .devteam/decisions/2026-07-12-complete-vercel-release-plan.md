# Decision: release completa con telemetria

- Estado: aprobado por el usuario.
- Hallazgo: Analytics, Speed Insights, `src/main.tsx`, `package.json` y `package-lock.json` ya estan publicados en `origin/develop`.
- Alcance recomendado: incluir los siete archivos locales de UI/contacto, el plan de Analytics y el checkpoint DevTeam; validar y pushear todo junto a `develop`.
- Verificacion remota: esperar el deploy de Vercel y comprobar la integracion desde produccion.
- Nota: Plausible permanece en `index.html`; puede convivir con Vercel Analytics, aunque ambos mediran trafico.
