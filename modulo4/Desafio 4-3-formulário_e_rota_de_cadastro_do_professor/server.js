// 1-create server
const express = require('express')
const nunjucks = require('nunjucks') //4 chamando nunjucks
const routes = require('./routes')

const server = express()

server.use(express.static('public')) // 5 chamando o css
server.use(routes)

// configuring template engine
server.set("view engine", ".njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// 3-adicionando rota



// 2-start server
server.listen(5000, function() {
    console.log("server is running")
}) 