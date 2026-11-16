# ROCKSTONE TRAVELS (copia estática)

Copia estática de https://rockstonetravels.com/ (WordPress) para subir a cualquier hosting.
No necesita PHP ni base de datos: alcanza con subir el contenido de esta carpeta a la raíz del sitio (`public_html`).

## Estructura
```
index.html
assets/css/style.css
assets/js/main.js     -> menú mobile, slider Montanha/Enoturismo, galería, formulario
assets/img/           -> imágenes e íconos
docs/                 -> PDFs legales del footer
```

## Cambios respecto al WordPress
- El **formulario de contacto** ya no manda emails: arma el mensaje y abre WhatsApp (+54 9 2615 37-2351) con los datos cargados.
- Se mantiene el **Google Tag Manager** `GTM-M43GJ84V`.
- Se eliminó todo lo de WordPress (plugins, reCAPTCHA, feeds, xmlrpc) y los scripts de extensiones de Chrome que se habían colado en el guardado.

## Archivos PENDIENTES (reemplazar con el mismo nombre)
Las fotos se sacaron del PDF del sitio. Estos archivos son **provisorios**:

| Archivo | Qué es | Estado |
|---|---|---|
| `assets/img/Vector.svg` | Logo (header y footer) | Provisorio, dibujado a mano |
| `assets/img/Grupo-6715.svg` | Ícono montaña del banner naranja | Provisorio |
| `assets/img/favicon.svg` | Favicon | Provisorio |
| `assets/img/*.svg` (resto) | Íconos (reloj, hotel, mapa, etc.) | Provisorios, se pueden dejar |
| `assets/img/imagen-bodega.jpg` | Foto slide Enoturismo | **Falta** (placeholder) |
| `assets/img/travel-tourism-people-concept-happy-couple-with-backpacks-hugging-alps-mountains-background-1.jpg` | Galería | **Falta** (placeholder) |
| `assets/img/happy-couple-drinking-wine-near-transparent-bubble-tent-glamping.jpg` | Galería | **Falta** (placeholder) |
| `assets/img/Rectangulo-754.jpg` | Galería | **Falta** (placeholder) |
| `assets/img/og-image.jpg` | Imagen para compartir en redes (1200x630) | **Falta** (placeholder) |
| `docs/if-2023-46141134-apn-dnrdi-23slyt-dWxMpzbW29Fqa4Eo-1.pdf` | "Oficina Virtual: Ver adjunto" | **Falta** |
| `docs/di-2023-88980576-apn-dnav-mtyd-provisorio-YNqOE90PxpF1DjDO.pdf` | "Disposición Habilitante: Ver adjunto" | **Falta** |

Si una imagen nueva viene en otro formato (por ejemplo `.png` en lugar de `.jpg`), hay que cambiar también la referencia en `index.html`.
