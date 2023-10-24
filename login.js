const express = require('express');
const app = express();
const port = 8028; // Porta em que o servidor será executado

app.use(express.static('.'));
// Rota para exibir a página index.html
app.get('/', (req, res) => {
res.sendFile(__dirname + '/tela_inicial.html');
});
// Rota para exibir a página outra_pagina.html

app.get('/cadastro', (req,res) => {
res.sendFile(_dirname + '/cadastro.html');
});

app.get('/Tela-inicial', (req, res) => {
res.sendFile(__dirname + '/login.html');
});

app.get('/agendamentos', (req,res) => {
res.sendFile(_dirname + '/agendamentos.html');
});

app.get('/pagina_medico', (req,res) => {
res.sendFile(_dirname + '/pagina_medico.html');
});

app.get('/pagina_paciente', (req, res) => {
res.sendFile(__dirname + '/pagina_paciente.html');
});

app.get('/prontuarios', (req, res) => {
res.sendFile(__dirname + '/prontuarios.html');
});

app.get('/localizacao', (req, res) => {
res.sendFile(__dirname + '/localizacao.html');
});

app.get('/contato', (req, res) => {
res.sendFile(__dirname + '/contato.html');
});

app.get('/ver_consultas.html', (req, res) => {
res.sendFile(__dirname + '/ver_consultas.html');
});

app.get('/medico_paciente.html', (req, res) => {
res.sendFile(__dirname + '/medico_paciente.html');
});
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

