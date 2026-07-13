# Decision: productos desde la oferta

- Estado: aprobado por el usuario.
- Recomendacion: mantener el estado y el modal en `Offer.tsx`, con datos separados para que sumar apps sea directo.
- Motivo: resuelve el flujo completo sin agregar dependencias ni introducir estado global prematuramente.
- Destino inicial a verificar: deploy publico de Backoffice en Vercel.
