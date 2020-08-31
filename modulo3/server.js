
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//chamando o css
server.use(express.static('public'))

//configure template engine(nunjucks)

server.set("view engine", "html")
nunjucks.configure("views", {
    express: server
})

//create route

server.get("/", function(req, res) {
    return res.render("about")
})

server.get("/cursos", function(req, res) {
    return res.render("cursos")
})


server.listen(5000, function() {
    console.log("server is running")
})
