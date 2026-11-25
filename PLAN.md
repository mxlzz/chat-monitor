# Plan por hitos
El objetivo estable está en OBJECTIVE.md. No comenzar integración real hasta pasar H0. No dedicar esfuerzo a interfaz definitiva sin H1. Cada hito exige auditoría registrada en audits/; los ajustes de tareas se justifican en LOG.md. Aprobación necesaria para cambios de objetivo, gastos, permisos sensibles y despliegue público.

| Hito | Dependencia | Resultado / criterio de aceptación y auditoría |
|---|---|---|
| H0 Viabilidad | ninguna | Matriz con evidencia de permisos, capacidades, licencias, alternativas y brechas R1–R6. Seleccionar vía permitida o declarar bloqueo y proponer alcance parcial. Auditoría A-H0 comprueba fuentes y evita confundir posibilidad con permiso. |
| H1 Integración | H0 aprobado | Prueba autorizada con dos chats de prueba, uno de proyecto: identidad, lectura, finalización, envío y recepción. Verificar cada capacidad por separado; si no hay permiso, no ejecutar. A-H1 revisa resultados, riesgos y repetibilidad. |
| H2 Diseño y dashboard | H1 | Seleccionar stack mínimo; dashboard con selector, última respuesta, estados y enlaces; arquitectura, amenazas, costes y persistencia documentados. A-H2 contrasta R1/R2/R5/R6. |
| H3 Continuidad | H2 | Envío manual y máquina de estados/temporizador opt-in. Pruebas sintéticas previas a cualquier envío autorizado real; casos de carrera, cuota, error, bloqueo y duplicado. A-H3 contrasta R3/R4 y permiso. |
| H4 Acceso remoto | H3 | PWA o web privada accesible desde Windows e iPhone, prueba de autenticación y revocación; sin exposición pública por defecto. A-H4 comprueba R5. |
| H5 Robustez | H4 | Pruebas reinicio, pérdida de red, sesión caducada, estado incierto, pausa y privacidad. A-H5 comprueba todos los requisitos y problemas abiertos. |
| H6 Entrega | H5 | Instalación reproducible Windows, guía iPhone, operación, desinstalación, limitaciones y evidencias. A-H6 decide aceptación final frente a R1–R6. |

## Primer tramo
- H0.01 (actual): revisar documentación oficial y términos aplicables a chats normales; registrar URL, fecha, cita breve, interpretación y alcance de permisos por lectura manual, lectura programática, envío manual y automático. Resultado evidence/H0.01.md. Aceptación: matriz de cuatro operaciones con permitido/prohibido/no establecido y fundamento; no ejecutar automatizaciones reales. Si falta permiso, marcar como no establecido.
- H0.02: revisar los candidatos de RESEARCH.md; registrar revisión/commit, licencia, actividad, arquitectura, permisos, datos tratados, riesgos y pruebas declaradas. Resultado evidence/H0.02.md. Aceptación: evidencia de fuente primaria por candidato o constancia de inaccesibilidad; distinguir documentación de implementación.
- H0.03: comparación por R1–R6, coste, complejidad, mantenimiento, seguridad y permiso; decisión adoptar/adaptar/combinar/desarrollar o bloquear, con criterios de descarte. Resultado evidence/H0.03.md; auditoría audits/A-H0.md. No continuar H1 si la vía no está autorizada.
Los hitos posteriores se desglosan al cerrar el anterior. Si una línea resulta improductiva, registrar y cortar; no ampliar indefinidamente búsquedas.
