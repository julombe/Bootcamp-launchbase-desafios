
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
    return res.render("index")
})


server.get("/about", function(req, res) {
    return res.render("about")
})
server.get("/courses", function(req, res) {
    return res.render("courses")
})




server.listen(5000, function() {
    console.log("server is running")
})
