## Propósito rápido
Ayuda a los agentes a ser productivos en este repositorio Next.js (app router). Contiene notas concretas sobre la estructura, comandos de desarrollo, convenciones y puntos de integración observables en el código.

## Arquitectura — vista rápida
- Framework: Next.js (app router) en `src/app`.
- Estructura principal: rutas por carpeta bajo `src/app` (cada ruta expone `page.jsx` o `page.js`). Ej.: `src/app/aeronaves/page.jsx`.
- Layout y CSS global: `src/app/layout.js` importa `./globals.css` y despliega el componente `Navbar` de `src/components/Navbar.jsx`.
- UI: TailwindCSS (clases utilitarias en los componentes). Archivo global de estilos en `src/app/globals.css` y configuración PostCSS/ Tailwind presente en el repo.

## Comandos esenciales
- Desarrollo local: `npm run dev` → Next dev (http://localhost:3000).
- Build: `npm run build`.
- Producción: `npm run start` (después de `build`).
- Linter: `npm run lint` (usa eslint).

Estos scripts están en `package.json` (Next v16 / React v19). Evitar cambiar versiones sin discutir.

## Convenciones de código y patrones detectados
- Rutas: crear carpetas en `src/app/<ruta>/page.jsx` para nuevas páginas. Mantener exports por defecto que rendericen el contenido.
- Componentes: `src/components` para componentes reutilizables (ej. `Navbar.jsx`). Usar PascalCase para nombres de componentes.
- Datos: actualmente algunas páginas usan datos simulados en el cliente/servidor (por ejemplo, lista de aeronaves en `src/app/aeronaves/page.jsx`). Nota: no hay API routes ni conexión a BD todavía.
- Server vs Client: la mayoría de los archivos no declaran `"use client"` (rendereo por defecto del lado servidor). Sólo convertir a cliente cuando sea necesario (eventos, estado local, hooks de React). Antes de forzar `use client`, confirmar si el componente necesita interactividad.

## Integraciones y puntos de extensión
- Navbar (links importantes): `src/components/Navbar.jsx` contiene enlaces a `/`, `/aeronaves`, `/ordenes`, `/inventario`, `/reportes`. Actualiza ahí las rutas de navegación.
- Donde colocar fetch de datos: preferible usar fetch desde server components en `src/app/.../page.jsx` o crear `app/api/*` si se requiere API interna.
- Estilos: usar clases Tailwind en JSX. No mezclar CSS-in-JS sin justificante.

## Ejemplos concretos (cómo actuar)
- Añadir nueva página “órdenes”: crear `src/app/ordenes/page.jsx` con export default function y devolver JSX.
- Cambiar título y metadata: editar `export const metadata` en `src/app/layout.js`.
- Introducir datos reales: reemplazar el arreglo local en `src/app/aeronaves/page.jsx` por fetch a un endpoint (server component) o por llamada a `app/api/*` si se quiere una API interna.

## Reglas para el agente
1. No alterar metadata global sin aviso del mantenedor (título y descripción en `layout.js`).
2. Prefiere server components (sin `use client`) salvo necesidad clara de estado/DOM/eventos.
3. Preserva clases Tailwind existentes; si se añaden utilidades, mantener coherencia con espaciado y paleta usada (ej.: `bg-blue-600`, `text-gray-800`).
4. Evitar añadir dependencias externas sin actualizar `package.json` y justificarlas en el PR.

## Archivos clave a revisar
- `package.json` — scripts y dependencias.
- `src/app/layout.js` — layout global y metadata.
- `src/app/globals.css` — estilos globales (Tailwind import).
- `src/components/Navbar.jsx` — navegación principal (rutas de ejemplo).
- `src/app/aeronaves/page.jsx` — ejemplo de página con datos temporales.

Si algo no queda claro (p. ej. dónde debería vivir la lógica de negocio o si la app debe usar server components exclusivamente), pregunta al mantenedor antes de re-estructurar o añadir APIs.

---
Por favor revisa este borrador y dime si quieres que añada ejemplos de PRs, convenciones de commits, o reglas más estrictas de testing/CI. 
