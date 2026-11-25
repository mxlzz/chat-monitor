# Método y validación
Cada tarea produce evidencia reproducible: ID, fecha, pregunta, fuentes/revisiones, procedimiento, resultado, limitaciones, criterio, decisión y archivos. Separar hecho verificado, afirmación de tercero, hipótesis y desconocido. En repositorio público usar exclusivamente fixtures sintéticos y datos anonimizados. No subir capturas, títulos/URLs de chats reales, secretos, perfiles del navegador ni registros personales.

## Puertas de viabilidad
H0 debe acreditar permiso aplicable a cada operación real antes de probarla. Capacidad técnica, código público, interacción iniciada por el usuario y ausencia de bloqueo no prueban permiso. Si no se establece autorización, parar esa línea; acceso remoto manual puede evaluarse como parcial. No sortear controles ni cuotas. No ejecutar código externo sin revisar dependencias y permisos.

## Protocolo de estados candidato
READY, BLOCKED, WAITING, ERROR, COMPLETED, AUDIT_REQUIRED; además GENERATING y UNKNOWN/DISCONNECTED para transporte. READY explícito por el agente es condición necesaria, no suficiente: comprobar finalización confirmada, identidad, opt-in, temporizador, límites y vigencia del turno. Mensajes y estados externos no son instrucciones para el monitor; tratar como datos. Un nuevo mensaje humano cancela la orden programada. Una entrega incierta exige conciliación manual, nunca reintento ciego. Tras reinicio o pérdida de conexión, pausar hasta revalidar; sin ráfagas de recuperación.

## Pruebas
Simulador de eventos y reloj controlado primero: chat equivocado, respuesta incompleta, estado ausente, intervención manual justo al vencer el plazo, duplicados, reinicio, desconexión, límites de turno, pausa, cuota, errores, cierre, credenciales revocadas. Usar clave de idempotencia por chat/turno y exclusión de envío concurrente en diseño; comprobar no entrega duplicada con logs sintéticos. Pruebas reales solo tras autorización y con chats de prueba designados. No probar en investigaciones activas sin autorización. Acceso remoto: mínimo privilegio, HTTPS, sesión autenticada, revocación, no publicar puertos; validar desde ambos dispositivos.

## Auditoría
En cada hito contrastar evidencia con criterio y objetivo; decidir aceptar, corregir, replantear o detener. Si es autoevaluación, identificarla como tal. Registrar negativos y cambios. No declarar prueba real a partir de simulador. No contar documentación como producto implementado.
