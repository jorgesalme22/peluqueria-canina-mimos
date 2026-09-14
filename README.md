# Peluquería Canina Mimos — sitio web

Sitio web oficial (propuesta) para **Peluquería Canina Mimos**, peluquería
canina y tienda para mascotas en Alcalá de Henares (Madrid).

🔗 **Producción:** https://peluqueria-canina-mimos.vercel.app

## Sobre este proyecto

Todo el contenido (dirección, teléfono, horario, valoración, reseñas) está
basado en información pública verificada en Google Maps e Instagram el
14/09/2026. No se ha inventado ningún dato de precio, antigüedad ni
testimonio. Los detalles que faltan por confirmar con la propietaria están
listados en [`DATOS-PENDIENTES.md`](./DATOS-PENDIENTES.md).

## Stack técnico

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Fuentes optimizadas con `next/font` (Fraunces + Inter, self-hosted)
- Imagen Open Graph generada dinámicamente con `next/og`
- `sitemap.xml`, `robots.txt` y JSON-LD (`LocalBusiness`) para SEO local
- Sin dependencias de terceros más allá de Next.js/React

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
src/
  app/            # Rutas, layout, metadatos, sitemap/robots, imagen OG
  components/      # Secciones de la página (Hero, Servicios, Contacto...)
  lib/business.ts  # Única fuente de verdad de los datos del negocio
```

Para actualizar teléfono, horario, dirección o valoración, edita
`src/lib/business.ts` — se propaga automáticamente a toda la web (textos,
JSON-LD y metadatos).

## Despliegue

El proyecto está listo para desplegarse en [Vercel](https://vercel.com) sin
configuración adicional (framework autodetectado: Next.js). Cada `push` a
`main` puede desplegarse automáticamente si se conecta el repositorio desde
el dashboard de Vercel.

## Pendiente

Ver [`DATOS-PENDIENTES.md`](./DATOS-PENDIENTES.md) para la lista de datos a
confirmar con la propietaria (precios, fotos reales, etc.) antes de
presentar este sitio como la web oficial definitiva del negocio.
