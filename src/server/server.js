const express = require('express');
const path = require('path');
const pre = document.querySelector('#displayArea');

const app = express();
const PORT = 3000;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Rota para a página principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Iniciar o servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    pre.innerHTML = path.join(__dirname, '../public');
});

// Exportar o servidor para uso em outras partes do código
module.exports = server;
