# Antecedentes y cuestiones abiertas
Preselección del diseño, no auditoría de código ni prueba realizada. Las afirmaciones de capacidades proceden de descripciones previas; confirmar existencia, revisión, licencia, mantenimiento, código y condiciones actuales antes de adoptar.

| Candidato | Utilidad potencial | Brecha / riesgo |
|---|---|---|
| [MultiChat Monitor](https://github.com/JoelMomo/chatgpt-multichat-monitor) | Monitor de pestañas y estados, referencia de interfaz | Verificar licencia MIT reportada, permisos, alcance y si tiene acceso remoto; no asumir autorización de extracción |
| [ChatGPT WebUI Bridge](https://github.com/OLmatter/chatgpt-bridge) | Referencia de puente local | Verificar funcionamiento y permiso para interacciones; no adoptar automatización no autorizada |
| [ChatCmd](https://github.com/int04/ChatCmd) | Puente y gestión de tareas descritos | Complejidad y permisos; auditar antes de ejecutar |
| [Chat Alert](https://github.com/dawidstruzik/chat-alert) | Referencia de avisos de finalización | No demuestra envío ni autorización |
| [RustDesk](https://github.com/rustdesk/rustdesk) | Acceso remoto manual a sesión normal | No ofrece dashboard estructurado ni continuación automática por sí solo |
| [Tailscale Serve](https://tailscale.com/kb/1242/tailscale-serve) | Acceso privado a servicio local HTTPS | Verificar plan, compatibilidad iOS/Windows, autenticación y límites |
| [Términos OpenAI](https://openai.com/policies/terms-of-use/) y [Centro de ayuda](https://help.openai.com/) | Fuente primaria para restricciones y mecanismos disponibles | Revisar versión, jurisdicción y permiso específico de lectura y envío automático; permiso no inferido de viabilidad técnica |
| API de conversaciones y MCP Events/Work | Alternativas examinadas en diseño | Excluidas como sustitutos de chats normales |

Preguntas: ¿hay mecanismo oficialmente permitido para leer el último mensaje, detectar fin y enviar a un chat normal existente? ¿se permite la continuación automática? ¿cómo garantizar identidad, accesibilidad remota y control? ¿qué puede resolverse con soluciones existentes, sin desarrollar? No afirmar exhaustividad ni inventar capacidades. H0.01 documenta primero fuentes oficiales y permisos; H0.02 audita repositorios a nivel de lectura sin instalar; H0.03 compara alternativas y decide.

## Resultado H0.01
Ver [matriz y fuentes oficiales](evidence/H0.01.md). No hay permiso establecido para integración completa. Candidatos adicionales parciales a contrastar: publicación deliberada de estado mínimo mediante herramienta autorizada en destino privado (no extracción de conversaciones), tareas nativas dentro de su alcance y enlaces originales manuales. No se elige stack ni se modifica el objetivo. Auditoría de candidatos pendiente.

## 2026-11-25 — seguimiento H0.01: publicación y reactivación separadas
El usuario considera favorable explorar publicación voluntaria de resúmenes por los agentes; pregunta por triggers y copy/paste. Se aprueba explorar esa hipótesis, no sustituir el objetivo completo ni activar automatizaciones.
- https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt (consulta 2026-11-25): tareas de Chat programables, recurrencia hasta una vez por hora en planes pagos elegibles, cinco tareas activas para Plus según documentación, tareas asociadas a conversaciones; permite crearlas en proyectos pero no acceden a archivos almacenados/subidos al proyecto. Comprobar en un chat de prueba designado si mantiene identidad, contexto y herramientas del chat existente; no asumir que replica un mensaje humano ni que permite disparar tras cada respuesta. No crear tareas sin autorización específica.
- https://developers.openai.com/plugins/build/mcp-events (consulta 2026-11-25): eventos externos entregados a chat suscrito, disponibles en Work y dots; no acredita trigger en chats normales. No se encontró webhook oficial de finalización de respuesta normal.
- https://help.openai.com/en/articles/20001256-plugins-in-chatgpt y https://help.openai.com/en/articles/20001547-hosting-a-plugin-with-chatgpt-sites (consulta 2026-11-25): plugins con apps alojadas en Sites disponibles según acceso a Sites y permisos; la documentación indica que pueden crearse en cualquier plan. Contrastar posibilidad de escritura de estados mínimos desde chat normal de proyecto, privacidad, confirmaciones, coste y acceso al dashboard. Diferenciar de MCP remoto personalizado cuyo soporte completo tiene otras restricciones (https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt). Alternativas: conectores existentes de Notion o Google Drive/Sheets; evaluar permisos actuales, no publicar datos reales hasta designar destino privado.
- Copy/paste: distinguir botón de dashboard que copia texto y abre URL registrada por usuario, con pegado/envío humano, de script que manipula interfaz y envía sin intervención. AutoHotkey y Power Automate Desktop como candidatos de asistencia local; factibilidad conceptual no prueba permiso ni robustez. Envío automatizado externo permanece sin autorización establecida; no probar, ni leer DOM/OCR automáticamente. Considerar envío equivocado, foco, navegación, generación pendiente, estado obsoleto, duplicados y límites. No equiparar reporte READY publicado antes de finalizar turno a confirmación de fin de transporte.
- Añadir a comparación H0.02/H0.03: publicación deliberada con alias de agente, ID de ejecución no sensible, resumen, estado, siguiente acción y fecha; enlace original registrado por usuario solo en destino privado. Botón abrir/copiar y enviar manualmente. Evaluar tareas nativas como candidato a continuidad autónoma limitada. No se selecciona stack, no se cambia alcance, no se realiza prueba real.

## Anexo Sites
[Evaluación y prueba mínima propuesta](evidence/H0.02-sites.md). Candidato preferente provisional para publicación voluntaria y dashboard privado; MCP Events no se aplica a chats normales. No adoptar arquitectura ni ejecutar pruebas sin cerrar puerta de viabilidad y aprobar alcance parcial.

## Anexo de envío local
[ChatCMD Bridge, ChatSequel, Atajos, Edge y Tailscale](evidence/H0.02-local-send.md). Separar publicación voluntaria de resúmenes y continuación. No confundir licencia de código, capacidad de extensión o gesto remoto del usuario con autorización del servicio. Comparar apertura/copia manual y acceso remoto humano; envío programático sigue sin permiso establecido.

## Brechas e inspección ChatCMD
[Anexo](evidence/H0.02-gap-analysis.md): código confirma registro de turnos nativos por captura, soporte de identidad y proyectos; alta manual por URL no confirmada. Túneles oficiales Sites documentados para Enterprise elegible, no asumir en Plus. Tailscale Serve no une automáticamente Site cloud con PC. Comparación preliminar R1–R6; no se autoriza envío automatizado.

## Cierre H0
[Revisión consolidada](evidence/H0.02.md), [comparación y decisión](evidence/H0.03.md), [autoevaluación](audits/A-H0.md). Integración completa bloqueada. Prototipo parcial Sites + plugin + apertura/copia manual recomendado, pendiente de aprobación. No se adopta extensión ni se ejecuta prueba real.

[H0.04](evidence/H0.04.md): MultiChat no tiene envío ni remoto; atención heurística lee respuestas. Consultar autorización específica.

[H0.05](evidence/H0.05.md): reportes deliberados publicados por agentes en GitHub, no extraer respuestas. 13 pruebas sintéticas pasaron; no transporte real.

Prioridad confirmada por usuario: el mecanismo de envío es condición previa. Diferir contrato de reportes y dashboard; no repetir búsquedas equivalentes ni pruebas sintéticas ajenas a esta condición. Ver PLAN y STATE.

[H0.04 — Contrato oficial](evidence/H0.04-official-send.md): ui/message formalmente admite active/new; thread entrypoint es instancia por conversación abierta manualmente. Explorar solo si se puede probar transporte por vía documentada; no asumir remoto/desatendido.
