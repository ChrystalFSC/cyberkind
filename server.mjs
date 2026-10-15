import http from 'node:http';
import {readFile} from 'node:fs/promises';
const port=Number(process.env.PORT||4173);
const allowed=new Set(['index.html','styles.css','app.js','cycle-engine.js','health-content.js','i18n.js','storage.js','icon.svg']);
const types={html:'text/html',css:'text/css',js:'text/javascript',svg:'image/svg+xml'};
http.createServer(async(req,res)=>{const name=new URL(req.url,'http://localhost').pathname.slice(1)||'index.html';if(!allowed.has(name)){res.writeHead(404);return res.end('Not found');}try{res.writeHead(200,{'Content-Type':`${types[name.split('.').pop()]}; charset=utf-8`,'Cache-Control':'no-store'});res.end(await readFile(new URL(name,import.meta.url)));}catch{res.writeHead(500);res.end('File unavailable');}}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
