---
target: storefront (home, shop, product, cart, contact)
total_score: 17
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 4
target_identity: "file:/home/lenadro29/Escritorio/refac/furniro/furniro-react/src/features/pages/shop/components"
timestamp: 2026-10-18T15-25-33Z
slug: src-features-pages-shop-components
---
Method: dual-agent (A: sub-agente de revisión de diseño · B: sub-agente de detector y evidencia de navegador)

Notas de la corrida: el .env cambió a VITE_API_SOURCE=fakestore (10:07); se relanzó el servidor con furniro forzado y se repitió A. La evidencia de B en /shop y /products/48 viene de ese modo; se descartó lo que depende de los datos.

## Design Health Score

| # | Heurística | Puntaje | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado del sistema | 3 | Toast en inglés, 2,5 s, sin "Ver carrito". |
| 2 | Coincidencia con el mundo real | 1 | Ropa/joyas/tecnología en tienda de muebles; moneda Rp/Rs./$; idioma mezclado. |
| 3 | Control y libertad | 2 | Borrar sin confirmar; Check Out salta a login sin contexto; mini-carrito cortado en móvil. |
| 4 | Consistencia y estándares | 1 | Cuatro dorados/naranjas, tres tratamientos tipográficos, tres direcciones. |
| 5 | Prevención de errores | 2 | Muro de login tras pulsar Check Out; sin indicio de stock. |
| 6 | Reconocer en vez de recordar | 2 | "Filter" y "Show 20" parecen controles; sin categorías ni búsqueda. |
| 7 | Flexibilidad y eficiencia | 1 | Sin filtro, búsqueda ni compra rápida; tarjetas no son enlaces. |
| 8 | Estética y minimalismo | 2 | /shop limpia; home ruidoso y fuera de tema; Lorem ipsum. |
| 9 | Recuperación de errores | 2 | Error de login solo como toast de 2,5 s. |
| 10 | Ayuda y documentación | 1 | Sin envío/devoluciones/dimensiones junto a la compra; typos en el pie. |
| **Total** | | **17/40** | **Pobre** (12-19) |

## Veredicto de especificidad de diseño: no pasa

A: solo el catálogo y sus ilustraciones pertenecen al producto; hero (laptop y bolsa), categorías Clothing/Jewelry/Techonology, carrusel, mosaico y blog son de plantilla, fijos en src/features/pages/shop/constants/.
Escaneo: 6 hallazgos advisory design-system-font-size (text-[15px], [20px], [40px]) en 5 archivos; detector en navegador: 18 hallazgos en /, 31 en /shop, 6 en /cart, 6 en /contact (contraste latón 3,0:1 x9-17, gris #99a1af sobre crema 2,5:1, placeholders 3,9:1, h2->h4 en el pie, h1->h3 en /shop, etiqueta "New Arrival" sobre el h1).
Falsos positivos o dudosos: first-viewport-column-overflow (grilla raíz de una columna), clipped-overflow-container (Swiper), buried-raster (fundido de carga), layout-transition (no identificado). Overlays: inyección correcta en 5 páginas, sin ventana visible.

## Impresión general

El catálogo funciona y las ilustraciones sostienen la idea de showroom, pero el home dice "tienda equivocada" en dos segundos y el pago es el momento más débil. Mayor oportunidad: que home y compra estén a la altura de /shop.

## Lo que funciona

1. Ilustraciones de producto con lenguaje plano y halo cálido en la familia latón/crema.
2. Mecánica de compra y rigor responsive: carrito persistente, objetivos de 44 px, sin scroll horizontal.
3. /shop serena: banner, franja crema, grilla de 4 columnas, conteo "Showing 1-20 of 48".

## Problemas prioritarios

[P1] El home y el blog no son de muebles. Fix: hero con escena de sala o lámpara ampliada, categorías reales, quitar carrusel/mosaico o rehacerlos, blog de muebles, sin Lorem ipsum. Comando: shape, luego layout.
[P1] La ruta de compra no tiene acción principal ni respaldo. Fix: Add To Cart y Check Out en latón, estado "Agregado", toast con "Ver carrito", envío/devoluciones bajo el total, resumen en el login, productos antes de totales en móvil. Comando: clarify, luego polish.
[P1] El sistema está fragmentado (moneda Rp/Rs./$, idioma, dorados, tipografía, direcciones). Fix: una moneda con una función de formato, todo en español, Poppins en login/mini-carrito/botones/logo, una dirección y un teléfono. Comando: document, luego harden.
[P1] Controles muertos y sin navegación por categorías. Fix: chips de categoría funcionales, quitar o hacer real "Show", sacar el prefijo de categoría del título. Comando: layout, con clarify.
[P2] Mini-carrito cortado en móvil (verificado: panel 320 px en x=159-479 con viewport de 375, 104 px fuera, Checkout en x=446) y jerarquía/contraste débiles. Fix: limitar el panel al viewport o hoja inferior, precio del detalle en latón negrita 24 px+, texto secundario #4B5563. Comando: adapt, luego typeset.

## Señales de personas

Casey (móvil): hero de laptop, primer producto bajo el pliegue, Checkout inalcanzable en el mini-carrito, totales antes de productos.
Jordan (primera vez): categorías de ropa, "Filter" muerto, moneda cambiante, login en inglés sin carrito.
Sam (teclado/lector): tarjetas sin enlace real, lang="en" con UI en español, bajo contraste, toast de 2,5 s, basurero sin etiqueta.

## Observaciones menores

Typos del pie (Privace, Helps, furino, reverved); Swiper azul por defecto; breadcrumb pegado a x=0 en móvil; "Related Products" repite las primeras 8 lámparas; el home muestra solo Lighting; key duplicada en el blog; "Short by"/"Show" sin traducir; conflicto propio: la etiqueta sobre el titular está documentada en DESIGN.md pero el detector la marca.

## Preguntas para considerar

1. Con el logo de "Zapatos Lima", ¿cuánto del home seguiría pareciendo correcto?
2. ¿Por qué el hero usa una foto de stock si tu mejor activo son las ilustraciones?
3. ¿Dónde ve quien compra la integridad que promete PRODUCT.md?
4. ¿Por qué el producto muestra "Sku" y "Tags" en vez de medidas, entrega y devoluciones?
