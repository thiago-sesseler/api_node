const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido a la API de Node.js - Desarrollado por Thiago');
    } else if (url === '/estado') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        const estadoData = {
            servicio: "API REST Node.js",
            hostname: os.hostname(),
            uptime_segundos: process.uptime(),
            fecha: new Date().toISOString()
        };
        res.end(JSON.stringify(estadoData, null, 2));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Ruta no encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor Node.js escuchando en el puerto 3000');
});