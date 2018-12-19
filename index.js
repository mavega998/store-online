const express = require('express');
const path = require('path');
const datos = require('./data');
const funcion = require('./functions');
const app = express();

app.set('views', path.join(__dirname, 'views'));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res, next) => {
    res.render('index');
});
app.post('/search', (req, res) => {
    const query = req.body.query;
    let aux = query.split(" ");
    let texto = funcion.nuevoTexto(query);
    let form = "<form action='/search' method='POST'><table><tr><td colspan='2'><input type='search' name='query' placeholder='Buscar'></td></tr><tr><td><button type='submit'>Buscar</button></td><td><button type='reset'>Limpiar</button></td></tr></table></form>";
    form += "Buscando: " + query;
    // console.log(texto);
    form += "<br>Resultado: " + texto;
    res.send(form);
});

// app.use('/data', datos);

const port = process.env.PORT || 69;
app.listen(port, (req, res) => {
    console.log(`El servidor esta ejecutandose en el puerto ${port}`);
});