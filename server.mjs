import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
const root = new URL('.', import.meta.url).pathname;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.ktx': 'application/octet-stream' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const path = join(root, pathname.endsWith('/') ? `${pathname}index.html` : pathname);
    if (!path.startsWith(root)) throw Error('bad path');
    res.setHeader('content-type', types[extname(path)] || 'application/octet-stream');
    res.end(await readFile(path));
  } catch { res.writeHead(404).end('not found'); }
});
server.listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log('http://127.0.0.1:' + server.address().port));
