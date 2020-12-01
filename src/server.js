const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://besafe:besafe@app.o7cqx.mongodb.net/serverbesafe?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads' )));
app.use(routes);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(process.env.PORT || 3333);