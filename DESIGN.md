---
name: Furniro
description: "Tienda de muebles luminosa y cálida, con fondos claros, Poppins y un único acento de latón envejecido."
colors:
  brass: "#B88E2F"
  ink: "#000000"
  graphite: "#4B5563"
  muted: "#6B7280"
  hairline: "#9CA3AF"
  mist: "#F3F4F6"
  page: "#F8FAFC"
  surface: "#FFFFFF"
  cream: "#FEF9E3"
  linen: "#FFF7ED"
  danger: "#DC2626"
  toast: "#111827"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "normal"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "35px"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  button:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: "0.1em"
rounded:
  sm: "0.25rem"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  full: "9999px"
spacing:
  unit: "0.25rem"
  gutter: "1.5rem"
  section: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "1.25rem 2rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 2.5rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  product-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "0"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "1.5rem 1.25rem"
  toast:
    backgroundColor: "{colors.toast}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1.25rem"
---

# Design System: Furniro

## Overview

**Creative North Star: "El Showroom Cálido"**

Furniro se comporta como una sala de exhibición luminosa: superficies blancas sobre un fondo casi blanco, el producto como protagonista y un único acento de latón envejecido que guía la mirada hacia lo que se puede comprar. La voz visual es cálida y confiable: quien compra debe sentir que puede fiarse, no que lo están seduciendo con efectos.

La densidad es holgada. Hay mucho aire entre secciones, tipografía Poppins en negrita para titular y texto negro puro sobre blanco; el color vive en el dorado y en unas pocas superficies de crema y lino que escalan el calor sin competir con las fotos. La interfaz es plana en reposo y responde al tacto: la sombra y el movimiento aparecen cuando el usuario interactúa, no antes.

**Key Characteristics:**
- Fondos claros y cálidos; el color de marca es un solo latón envejecido.
- Poppins en todo el texto, con titulares en negrita grandes y etiquetas pequeñas en mayúsculas.
- Plano en reposo; sombra y desplazamiento solo como respuesta (hover, capas flotantes).
- Esquinas redondeadas de 8 a 16 px; nada de formas duras salvo el banner del hero.
- Todo se usa con el pulgar: objetivos de 44 px y una sola columna en móvil.

## Colors

Un solo acento cálido sobre una familia de grises azulados fríos, con dos tintes cálidos (crema y lino) para zonas de apoyo. La base tipográfica de rem escala con el ancho de pantalla, pero los colores no cambian.

### Primary
- **Latón envejecido** (#B88E2F): el único acento de marca. Relleno del botón principal, precios, titular del hero, la etiqueta pequeña sobre el hero y el anillo de foco. Contraste sobre blanco de 3,0:1: sirve para texto grande (negrita de 19 px o más) y para rellenos con texto blanco grande; no para texto pequeño sobre blanco.

### Neutral
- **Tinta** (#000000): texto principal, títulos de sección y contornos del botón secundario.
- **Grafito** (#4B5563): subtítulos y texto secundario (gray-600).
- **Gris apagado** (#6B7280): encabezados del pie y texto de controles (gray-500).
- **Línea fina** (#9CA3AF): bordes de campos y selector de cantidad (gray-400).
- **Niebla** (#F3F4F6): fondo de la tarjeta del hero y bordes de tarjetas (gray-100).
- **Página** (#F8FAFC): fondo de toda la aplicación (slate-50).
- **Superficie** (#FFFFFF): header, contenido principal, pie y tarjetas.
- **Crema** (#FEF9E3): barra de filtros del catálogo, amber-100 al 50 %.
- **Lino** (#FFF7ED): barra de migas de pan del detalle y bloque de inspiración, orange-50 y orange-100 al 30 %.

### Feedback
- **Rojo de error** (#DC2626): avisos de error y acción de cerrar sesión.
- **Tinta de aviso** (#111827): fondo del aviso de éxito, con texto blanco.

### Named Rules
**La Regla del Único Latón.** Hay un solo dorado en el sistema. Aparece en menos de un 10 % de cada pantalla y su rareza es lo que lo vuelve señal. Los demás amarillos y dorados del código son desviaciones por unificar, no variantes: `yellow-700` en la paginación, `yellow-400` en "Show more" y `#D5A436` en el logo.

**La Regla del Texto Pequeño.** El latón no se usa para texto de cuerpo sobre blanco. Si el texto es pequeño, va en tinta o en grafito; el latón queda para precios en negrita grande, titulares y rellenos.

## Typography

**Display Font:** Poppins (con sans-serif)
**Body Font:** Poppins (con sans-serif)
**Label/Mono Font:** Poppins, sin monoespaciada

**Character:** una geométrica redonda y amable que da un aspecto moderno y cercano sin perder claridad. La jerarquía se construye con el peso (400 a 700) y el tamaño, no con cambios de familia.

### Hierarchy
- **Display** (700, 3 rem, 1): titular del hero y del banner de cada sección. En escritorio mide 42 px y en móvil 48 px porque escala con la base de rem.
- **Headline** (700, 32 px, 1,5): títulos de sección del home ("Browse The Range", "Our Products"). El de inspiración sube a 40 px (700, 1,5).
- **Title** (700, 35 px, 1,33): nombre del producto en el detalle; en móvil baja a 1,5 rem.
- **Body** (400 a 500, 1 rem, 1,5): texto corrido y descripciones; el párrafo del hero va en 500 y 1,125 rem. Mantener una línea de 65 a 75 caracteres.
- **Button** (700, 1 rem): texto de botones principales.
- **Label** (600, 0,875 rem, 0,1 em, mayúsculas): etiqueta pequeña sobre el titular del hero.

### Named Rules
**La Regla de una sola Familia.** Todo el texto va en Poppins, incluido el logotipo, los botones, los campos y los enlaces del pie. Hoy el logotipo ("Furniro"), los enlaces del pie, los campos de formulario, "Add To Cart" y "Submit" caen en la fuente del sistema (`ui-sans-serif`): es una desviación, no una decisión.

## Layout

Una columna central blanca sobre un fondo casi blanco, con el contenido en un `container` de ancho máximo y las cuadrículas de producto acotadas a 75 rem. La grilla de producto pasa de 1 a 2, 3 y 4 columnas en los cortes `sm` (640 px), `md` (768 px) y `lg` (1024 px). El espaciado sigue la escala de 0,25 rem de Tailwind: huecos de 1,5 rem entre tarjetas y de 3,5 a 5 rem entre secciones.

La base tipográfica es de 16 px por debajo de 640 px y de 14 px desde 640 px, y casi todo se dimensiona en rem, así que el sistema entero escala con esa base. Por eso los objetivos táctiles se fijan en píxeles (mínimo 44 px) y no en rem.

El header es pegajoso y se compacta en móvil: logo y cuenta/carrito arriba, enlaces abajo, unos 110 px de alto en total. En escritorio es una sola fila de 88 px con 6 rem de margen lateral. Las capas flotantes (carrito, menú de usuario, aviso) se anclan a su disparador.

## Elevation & Depth

La profundidad es plana en reposo y responde a la interacción. El header y las tarjetas llevan una sombra casi de línea para separarse del fondo; al pasar el mouse la tarjeta sube 2 px y gana sombra media; solo las capas flotantes (carrito, menú, aviso) tienen sombra marcada. No hay capas tonales ni brillos.

### Shadow Vocabulary
- **Línea ambiente** (`box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)`): header y tarjetas de producto en reposo.
- **Elevación al responder** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)`): tarjeta de producto al pasar el mouse, junto con un desplazamiento de -2 px.
- **Capa flotante** (`box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1)`): panel del carrito y menú de usuario; los avisos usan una sombra intermedia (`0 10px 15px -3px rgba(0,0,0,.1)`).

### Named Rules
**La Regla de Plano por Defecto.** Las superficies son planas en reposo. La sombra aparece como respuesta a un estado (hover, capa abierta) y no como decoración; el header es la única excepción permanente.

## Shapes

Las esquinas son suaves y tienen una escala corta: 8 px en botones principales y paginación, 12 px en tarjetas, campos y selector de cantidad, 16 px en imágenes y en la búsqueda del blog, y círculo completo en insignias. El banner del hero es la única pieza de esquinas rectas. Los bordes son hilos de 1 a 1,6 px en gris suave o en tinta para el botón secundario; no hay bordes de acento.

## Components

### Buttons
- **Shape:** esquinas de 8 px para el principal (rounded-lg); 12 px para el secundario (rounded-xl).
- **Primary (canónico):** relleno de latón envejecido (#B88E2F), texto blanco en negrita de 1 rem, relleno vertical de 1,25 rem y ancho de hasta 14 rem ("BUY NOW"). Un solo botón principal por pantalla.
- **Secondary / Outline:** transparente con borde de 1 px en tinta, 12 px de radio y relleno de 0,75 por 2,5 rem; al pasar el mouse se invierte a fondo tinta y texto blanco ("Add To Cart").
- **Hover / Focus / Active:** transición de 150 a 160 ms con salida rápida; al presionar, `scale(0.97)`; foco con contorno de 2 px en latón y desfase de 2 px.
- **Desviaciones por unificar:** "Explore More" y "Submit" son botones dorados cuadrados, y "Show more" es un contorno amarillo; deben alinearse al principal.

### Cards / Containers
- **Corner Style:** 12 px.
- **Background:** superficie blanca con borde de 1 px en niebla.
- **Shadow Strategy:** línea ambiente en reposo y elevación al responder (ver Elevation & Depth).
- **Internal Padding:** la imagen va en un cuadrado gris muy claro sobre la tarjeta y el texto con 1,25 rem de relleno; el título ocupa dos líneas como máximo y el precio va en latón negrita.

### Inputs / Fields
- **Style:** borde de 1,6 px en línea fina, fondo transparente, 12 px de radio y relleno de 1,5 por 1,25 rem; etiqueta superior en Poppins 500.
- **Focus:** contorno de 2 px en latón.
- **Error / Disabled:** los errores se comunican con el aviso rojo; no hay estilo de campo inválido propio todavía.

### Navigation
- **Style:** barra blanca pegajosa con un hilo inferior; enlaces en Poppins 600 y objetivos de 44 px. En escritorio van centrados entre el logo y los íconos; en móvil forman una segunda fila repartida de borde a borde.
- **States:** el carrito muestra una insignia roja con el conteo; "Inicia sesión" cambia al saludo con un menú desplegable de salida.

### Pagination
- Botones de 44 px con 8 px de radio, página activa rellena y las demás con relleno tenue. Hoy usan `yellow-700` y no el latón de marca.

### Avisos (toast)
- Píldora oscura (#111827) con texto blanco de 0,875 rem, 8 px de radio y sombra intermedia, centrada abajo; los de error van en rojo. Entra con un deslizamiento corto y desaparece en 2,5 s.

## Do's and Don'ts

### Do:
- **Do** usar Poppins en todo el texto, incluidos el logotipo, los botones y los campos.
- **Do** dejar un solo botón principal por pantalla: latón envejecido, texto blanco en negrita y 8 px de radio.
- **Do** mantener las superficies planas en reposo y dejar la sombra y el desplazamiento para la interacción.
- **Do** fijar los objetivos táctiles en 44 px mínimos, medidos en píxeles.
- **Do** animar en 150 a 200 ms con salida rápida y respetar `prefers-reduced-motion`.
- **Do** mostrar el latón como señal escasa: precios, titular del hero y la acción principal.

### Don't:
- **Don't** añadir otro dorado o amarillo. Unificar `yellow-700` (paginación), `yellow-400` ("Show more") y `#D5A436` (logo) en el latón de marca.
- **Don't** usar latón para texto pequeño sobre blanco: da 3,0:1 y no llega a 4,5:1.
- **Don't** crear botones dorados cuadrados ni botones de contorno amarillo para acciones principales.
- **Don't** mezclar radios sueltos: la escala es 8, 12 y 16 px.
- **Don't** dimensionar objetivos táctiles en rem: con la base de 14 px quedan por debajo de 44 px.
- **Don't** dejar texto de relleno ("Lorem ipsum") ni mezclar idiomas y monedas en la interfaz.
