const server = require('express')();
const router = require('./routes');

const PORT = 3000;

server.all('/', router);

server.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}!`));