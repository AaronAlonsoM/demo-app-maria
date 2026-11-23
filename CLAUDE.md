# Instrucciones para el agente

Demo académica solo front. Quien pide cambios es un diseñador sin experiencia en código: explica en lenguaje llano y no le pidas que toque código.

- Stack: HTML + CSS + JavaScript plano en `src/`. Sin frameworks, sin build, sin backend, sin llamadas de red. No añadas dependencias.
- Datos simulados en `src/data.js`; la app guarda el estado solo en memoria.
- Estilo: usa y amplía las variables CSS de `:root` en `src/styles.css`.
- Video: `demo.json` es el guion de [agent-screenplay](https://github.com/gmpetrov/agent-screenplay) (`npx screenplay guide` y `npx screenplay schema` explican el formato).
- Tras cambiar la UI, ejecuta `npm run video:check`. Si un paso falla porque cambió un texto o botón, actualiza `demo.json`. Para el video final: `npm run video` y revisa `demo.storyboard.png`.
- Ver la app: `npm start` (http://localhost:5173).
- Diseño: el skill `impeccable` está instalado en `.claude/skills/` (y en `.cursor/skills/`). Úsalo para cambios visuales. Telemetría desactivada en `.impeccable/config.json`.
