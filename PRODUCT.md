# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Compradores reales de muebles que navegan la tienda online, en celular o en computadora, para explorar el catálogo, armar un carrito y completar una compra. Es el usuario principal para el que se diseña.

## Product Purpose

Furniro es una tienda online de muebles (catálogo dinámico, carrito persistente y checkout protegido) cuyo propósito confirmado es ser una pieza de portafolio full-stack: demostrar un front pulido y un backend con integridad real. Los datos de la demo son de ejemplo. Salir bien significa que la tienda se comporte como una tienda real de punta a punta, porque ese comportamiento es la prueba del trabajo.

## Positioning

Detrás de la vitrina hay un backend que cuida la integridad de la compra: el stock se descuenta de forma atómica y cada pedido guarda una copia (snapshot) de la dirección, el título y el precio del momento, así que un pedido histórico no cambia si el producto cambia después. Una tienda de plantilla que solo simula el flujo no puede afirmar eso con verdad.

## Operating Context

- Front en Vercel (SPA de React); backend en Render, plan gratuito con arranque en frío de 30 a 50 segundos tras la inactividad; PostgreSQL en producción; imágenes en Cloudinary.
- El formulario de contacto envía correos desde el navegador con EmailJS.
- El catálogo de demo (48 productos, 6 categorías) se carga con `scripts/seed_catalog.py` del repositorio del backend, a través de la API, con un usuario staff.

## Capabilities and Constraints

- Funciones: catálogo paginado de 20 por página con orden, detalle de producto, carrito persistente, checkout detrás de login, formulario de contacto, blog con contenido fijo y páginas de login.
- Idioma de la interfaz: español. Hoy mezcla inglés y español y falta unificarla.
- Moneda: una sola. El símbolo todavía no está decidido; hoy aparecen "Rp" y "Rs".
- Brecha conocida: el login del front llama a `/auth/login` (ruta de Fake Store) y el backend expone `/api/auth/token/` con email; el checkout vacía el carrito pero no crea el pedido en `/api/orders/`.
- Es una SPA que renderiza en el cliente: los metadatos por página no llegan a los scrapers de redes sociales sin prerenderizado.
- Decisión abierta: el símbolo de moneda.

## Brand Commitments

- Nombre: Furniro.
- Marca gráfica: `src/assets/common/logo.svg` y `public/favicon.svg` (la "M" de dos paralelogramos huecos y un triángulo).

## Evidence on Hand

- 48 productos de demo con precios y valoraciones aleatorios, e imágenes ilustradas generadas por código (no son fotos reales).
- No hay reseñas, clientes, testimonios ni métricas reales; no inventarlos.
- Hay texto de relleno ("Lorem ipsum") en el home y una dirección de ejemplo en el pie de página.

## Product Principles

1. Se diseña para el comprador y se evalúa como una tienda real: el carrito, el login y el checkout tienen que funcionar de verdad, no solo verse bien.
2. La integridad se demuestra con comportamiento visible: stock que no se vende de más y pedidos que no cambian después.
3. Un solo idioma y una sola moneda en toda la interfaz; nada de texto mezclado.
4. Los datos de demo se tratan como demo: no se fabrican clientes, reseñas ni cifras que parezcan reales.
5. Funciona primero en el celular: toda página debe usarse cómodamente con el pulgar.
