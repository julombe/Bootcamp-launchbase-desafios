
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//chamando o css
server.use(express.static('public'))

//configure template engine(nunjucks)

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server
})

//creating routes

server.get("/", function(req, res) {
    return res.render("courses")
})


server.get("/about", function(req, res) {
    return res.render("about")
})




server.listen(5000, function() {
    console.log("server is running")
})
