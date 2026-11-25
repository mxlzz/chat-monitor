const resourceUri = 'ui://widget/continua.html';
const mimeType = 'text/html;profile=mcp-app';
const toolName = 'mostrar_boton_continua';

const widget = `<!doctype html>
<html lang="es">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root { color-scheme: light dark; }
  body { font: 1rem system-ui; margin: 0; padding: .5rem; }
  button { font: inherit; min-height: 44px; padding: .5rem 1rem; cursor: pointer; }
  p { margin: .5rem 0 0; }
  p:empty { display: none; }
</style>
<button id="continue" type="button">Continúa</button>
<p id="status" role="status"></p>
<script>
  const button = document.getElementById('continue');
  const status = document.getElementById('status');

  button.addEventListener('click', async () => {
    const host = window.openai;
    if (typeof host?.sendFollowUpMessage !== 'function') {
      status.textContent = 'ChatGPT no habilitó el envío en este componente.';
      return;
    }

    button.disabled = true;
    try {
      const result = await host.sendFollowUpMessage({ prompt: 'Continúa' });
      if (result?.isError) {
        status.textContent = 'ChatGPT rechazó el envío.';
      }
    } catch {
      status.textContent = 'No se pudo confirmar el envío. Revisá el chat.';
    }
  });
</script>`;

const serverInfo = { name: 'continua-ensayo', version: '0.1.0' };
const capabilities = { tools: {}, resources: {} };
const resource = { uri: resourceUri, name: 'Continúa', mimeType };
const tool = {
  name: toolName,
  title: 'Mostrar botón Continúa',
  description: 'Muestra el botón de prueba. Abrir el botón no envía un mensaje.',
  inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  annotations: { readOnlyHint: true, openWorldHint: false },
  _meta: { ui: { resourceUri } },
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/' && request.method === 'GET') {
      return new Response('Abrí el plugin Continúa desde el chat de prueba.', {
        headers: { 'content-type': 'text/plain; charset=utf-8' },
      });
    }
    if (url.pathname !== '/mcp') return new Response(null, { status: 404 });
    if (request.method !== 'POST') {
      return new Response(null, { status: 405, headers: { allow: 'POST' } });
    }
    let message;
    try {
      message = await request.json();
    } catch {
      return Response.json({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } });
    }
    if (message?.jsonrpc !== '2.0' || typeof message.method !== 'string') {
      return Response.json({ jsonrpc: '2.0', id: null, error: { code: -32600, message: 'Invalid request' } });
    }
    const { id, method, params } = message;
    if (id === undefined) return new Response(null, { status: 202 });

    const success = (result) => Response.json({ jsonrpc: '2.0', id, result });
    const fail = (code, message) => Response.json({ jsonrpc: '2.0', id, error: { code, message } });
    switch (method) {
      case 'server/discover':
        return success({ supportedVersions: ['2026-07-28'], capabilities, serverInfo });
      case 'initialize':
        return success({ protocolVersion: '2025-11-25', capabilities, serverInfo });
      case 'ping':
        return success({});
      case 'tools/list':
        return success({ tools: [tool] });
      case 'tools/call':
        if (params?.name !== toolName) return fail(-32602, 'Unknown tool');
        return success({ content: [{ type: 'text', text: 'Se solicitó mostrar el botón de prueba.' }] });
      case 'resources/list':
        return success({ resources: [resource] });
      case 'resources/read':
        if (params?.uri !== resourceUri) return fail(-32602, 'Unknown resource');
        return success({ contents: [{ ...resource, text: widget }] });
      default:
        return fail(-32601, 'Method not found');
    }
  },
};
