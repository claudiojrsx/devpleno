const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/vaga', (req, res) => {
    res.render('vaga')
});

app.listen(3333, (err) => {
    if (err) {
        console.log("Não foi possível iniciar o servidor.")
    } else {
        console.log("Servidor iniciado com sucesso.")
    }
});
