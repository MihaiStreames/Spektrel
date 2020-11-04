const express = require("express");
const morgan = require("morgan");
const db = require("./db/connection");
const users = require("./db/users");
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const app = express();

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        message: "hello",
    }));
    res.status(200);
});

app.get('/users', (req, res) => {
    users.getAll().then((users) => {
        res.json(users)
    });
    res.status(200);
});

app.post('/users', jsonParser, (req, res) => {
    users.create(req.body).then((user) => {
        res.json(user);
    }).catch((error) => {
        res.json(error);
        res.status(500);
    })
});

function notFound(req, res, next){
    res.status(404);
    const error = new Error("Not found: " + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next){
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Started on http://localhost:" + port);
});