const express = require("express");
const morgan = require("morgan");
const fs = require('fs');
var cors = require('cors')

const app = express();
app.use(cors())

function createResponse(data) {
    let isGuest = false;
    if(data.includes("GA")) isGuest = true;
    return {
        imgURL: "http://localhost:5000/fullbodies/" + data,
        headshotURL: "http://localhost:5000/headshots/" + data.replace(".png", "") + "_Headshot.png",
        serial: "#" + data.split("_")[0],
        name: data.split("_")[1],
        corruption: data.split("_")[2] + "%",
        rarity: data.split("_")[3],
        author: data.split("_")[4],
        guest: isGuest,
        colors: [
            "#" + data.split("_")[5],
            "#" + data.split("_")[6].replace(".png", ""),
        ]
    }
}

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

app.use(morgan("dev"));
app.use(express.static('db'))

// Routes
app.get('/', (req, res) => {
    res.send(JSON.stringify({
        message: "hello",
    }));
    res.status(200);
});
app.get('/heartdroids', (req, res) => {
    fs.readdir('./db/fullbodies/', (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        const response = []
        files.forEach((file) => {
            response.push(createResponse(file));
        })
        res.json(response)
        res.status(200);
    });
});
app.get('/search/serial/:serial', (req, res) => {
    let serial = req.params.serial;
    fs.readdir('./db/fullbodies/', (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        const response = []
        files.forEach((file) => {
            if(file.startsWith(serial)) {
                response.push(createResponse(file));
            }
        })
        res.json(response);
        res.status(200);
    });
});
app.get('/search/rarity/:rarity', (req, res) => {
    let rarity = req.params.rarity.toLowerCase();
    fs.readdir('./db/fullbodies/', (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        const response = []
        files.forEach((file) => {
            console.log(file);
            if(file.split("_")[3].toLowerCase() === rarity) {
                response.push(createResponse(file));
            }
        })
        res.json(response);
        res.status(200);
    });
});
app.get('/search/artist/:artist', (req, res) => {
    let artist = req.params.artist.toLowerCase();
    fs.readdir('./db/fullbodies/', (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        const response = []
        files.forEach((file) => {
            console.log(file);
            if(file.toLowerCase().includes(artist)) {
                response.push(createResponse(file));
            }
        })
        res.json(response);
        res.status(200);
    });
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Started on http://localhost:" + port);
});