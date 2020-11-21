const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const http = require('http').createServer(app);

mongoose.connect('mongodb+srv://besafe:besafe@app.o7cqx.mongodb.net/serverbesafe?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})

app.listen(3333);

