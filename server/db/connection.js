const monk = require("monk");
const db = monk("localhost/spektrel");

module.exports = db;