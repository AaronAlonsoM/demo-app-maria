# Demo académica: StudyFlow

App de demostración **solo front** (HTML + CSS + JavaScript, sin backend ni build). Los datos son simulados.

## Requisitos

- [Node.js](https://nodejs.org) 20 o superior (instálalo una vez).

## Primera vez

Abre una terminal en esta carpeta y ejecuta:

```bash
npm run setup
```

Con eso queda todo listo: instala lo que necesita el proyecto y descarga el navegador que se usa para grabar el video. Solo hace falta la primera vez.

Las herramientas de diseño **impeccable** ya vienen dentro del proyecto, no hay que instalarlas aparte (ver más abajo).

## Ver la app

```bash
npm start
```

Abre http://localhost:5173. Al recargar, la app vuelve a los datos iniciales.

## Dónde se edita la UI

Todo está en `src/`:

| Archivo | Qué cambias ahí |
|---|---|
| `src/styles.css` | Colores, tipografía, espaciados. Las variables de arriba (`--primario`, `--fondo`…) cambian toda la app. |
| `src/index.html` | Estructura de la pantalla: secciones, botones, textos fijos. |
| `src/data.js` | Datos de ejemplo (tareas, asignaturas). |
| `src/app.js` | Comportamiento (añadir tarea, marcar, cambiar de pestaña). |

Con vibecoding (Claude Code, Cursor…), abre esta carpeta y pide el cambio en lenguaje normal, por ejemplo: *"cambia el color principal a verde y pon la tipografía Inter"*. El archivo `CLAUDE.md` ya le explica al agente cómo está montado el proyecto.

## Herramientas de diseño (impeccable)

[impeccable](https://github.com/pbakaus/impeccable) le enseña a tu asistente de IA (Claude Code o Cursor) a diseñar mejor. Funciona solo con abrir esta carpeta en Claude Code o en Cursor; si ya estaba abierta, ciérrala y vuelve a abrirla.

En el chat del asistente escribe `/impeccable` seguido de lo que quieres. Por ejemplo:

- `/impeccable init`: lo primero de todo. Te hace unas preguntas sobre la app y su público y guarda las respuestas.
- `/impeccable critique src/index.html`: opina sobre el diseño actual.
- `/impeccable polish`: pule detalles (espacios, alineaciones, colores).
- `/impeccable bolder` o `/impeccable quieter`: más llamativo o más sobrio.

La primera vez que lo uses descargará un pequeño programa de apoyo; es automático.

## Generar el video

```bash
npm run video
```

Graba la app siguiendo el guion de `demo.json` y deja:

- `demo.mp4`: el video final (1920×1080).
- `demo.storyboard.png`: una imagen por paso, para revisar de un vistazo.

No hace falta tener la app arrancada ni ninguna cuenta o clave.

**Cambiar el guion:** edita `demo.json`. Cada paso es una acción sobre la app (`click`, `type`, `select`, `highlight`…). Los elementos se nombran por lo que se ve en pantalla, por ejemplo `text=Añadir` o `role=button[name='Progreso']`. `"say"` y `"text"` añaden un subtítulo. Si cambias textos o botones de la app, ajusta también los pasos que los nombran.

**Comprobar el guion sin grabar:** `npm run video:check` (dice qué paso falla y qué elementos hay visibles).

**Ajustar el aspecto del video** (fondo, márgenes, esquinas) a ojo, sin volver a grabar:

```bash
npx screenplay style demo.json
```

Herramienta usada: [agent-screenplay](https://github.com/gmpetrov/agent-screenplay).

### Alternativa manual

Si algo falla con la grabación automática: `npm start`, abre la app y graba la pantalla con **Cmd + Shift + 5** (Mac) o **Win + Alt + R** (Windows, Xbox Game Bar).
