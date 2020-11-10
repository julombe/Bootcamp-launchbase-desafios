const express = require('express')
const routes = express.Router()

// create routes
routes.get('/', function(req, res) {
    return res.send("Ok")
})

module.exports = routes