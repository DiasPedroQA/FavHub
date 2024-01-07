const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

// Rota para a página principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Rota para lidar com requisições POST da página index.html
app.post('/uploadFile', (req, res) => {
    // Lógica para manipular o arquivo enviado
    // Implemente a lógica necessária para processar o arquivo enviado pela página
    // Pode incluir leitura do arquivo, manipulação, salvamento, etc.
    // Exemplo simples de leitura do corpo da requisição:
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const data = Buffer.concat(body).toString();
        console.log('Conteúdo do arquivo recebido:', data);

        // Aqui você pode realizar a lógica adicional conforme necessário

        // Responda ao cliente
        res.status(200).send('Arquivo recebido com sucesso!');
    });
});

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = server;
