# Review: release completa con Vercel

- Estado final: aprobado, sin hallazgos bloqueantes.
- Correctness: Analytics y Speed Insights siguen montados una vez en el root y aparecen en el bundle de produccion.
- UI: hero, about, oferta, modal, FAQ y footer verificados; CTAs y correos actualizados presentes.
- Responsive: viewport movil 390x844 aprobado; sin desborde horizontal visible.
- Performance: sin dependencias nuevas en este release; build generado correctamente.
- Hallazgo de mayor riesgo: hero movil denso, pero CTA y jerarquia permanecen claros.
- Riesgos residuales: Plausible y Vercel mediran en paralelo; full-page screenshot repite el fondo fijo por stitching, sin reproducirse en viewport.
- Produccion: deployment `dpl_G4T4ttBeX2YHXcP9HELyiWDYHbci` Ready y aliased a `https://furcode.com.ar`.
- Telemetria: ambos scripts responden 200 y el DOM de produccion contiene exactamente una instancia de cada integracion.
