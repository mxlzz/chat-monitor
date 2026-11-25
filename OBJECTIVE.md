# Objetivo aprobado — 2026-11-25

Determinar si es viable construir, y si lo es entregar, una aplicación web privada que permita seleccionar, supervisar y continuar conversaciones normales existentes de ChatGPT, incluidas las de proyectos, desde Windows, iPhone y otros dispositivos.

## Requisitos y aceptación
- R1: registrar explícitamente chats seleccionados, mantener su identidad y abrir el chat original; probar dos chats distintos, incluido uno de proyecto.
- R2: mostrar la última respuesta y distinguir generación, finalización, error y desconexión cuando exista un mecanismo autorizado y fiable; indicar antigüedad y desconocido si no hay evidencia.
- R3: enviar manualmente «Continuá» o texto elegido, al chat correcto, sin duplicados; verificar recepción y nueva respuesta.
- R4: por chat, modo automático opt-in, mensaje editable, demora desde finalización confirmada, límite finito de turnos por sesión, pausa global e individual. Si hay intervención manual durante la espera, cancelar la acción pendiente. Nunca enviar durante generación, espera, bloqueo, error, auditoría pendiente, fin, cuota o estado ambiguo. Exigir READY explícito y autorización del usuario para ese modo; ante duda detenerse. Probar temporizador, carrera manual/automática, reinicio, desconexión y entrega incierta.
- R5: acceso privado remoto desde Safari iPhone y Windows; puede depender de PC encendida y sesión normal abierta. Autenticación, cifrado y revocación; no exponer servicio sin protección.
- R6: instalación y operación reproducibles, registro local mínimo, mecanismo de detención, respeto de términos y límites del servicio; sin servicios pagos sin autorización.

## Límites
No migrar a Work, Codex ni API de modelos. No desarrollar una plataforma general de agentes. No extraer programáticamente contenido ni automatizar interacción real sin establecer permiso aplicable; no usar endpoints privados, capturar cookies, eludir límites o controles. No instalar herramientas ni acceder a cuenta real sin autorización pertinente. Si no existe integración permitida, documentar bloqueo y evaluar acceso remoto manual o integración expresamente autorizada; no presentar sustitutos parciales como cumplimiento total ni cambiar el objetivo sin aprobación. El resultado de investigación puede ser una conclusión de inviabilidad fundamentada.

## Decisiones
Computadora Windows encendida y ChatGPT abierto es aceptable, no obligatorio. Aplicación web/PWA y alojamiento local con red privada son hipótesis preferentes, no stack cerrado. Estado por conversación explícito y continuación automática prioritarios. Coste recurrente por defecto cero. Repositorio público: datos privados solo localmente.
