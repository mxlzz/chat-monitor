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
