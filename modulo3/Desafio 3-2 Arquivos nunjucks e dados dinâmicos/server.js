
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data") //calling array

//chamando o css
server.use(express.static('public'))

//configure template engine(nunjucks)

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false
})

//creating routes

server.get("/", function(req, res) {
    return res.render("courses", { items: courses })
})


server.get("/about", function(req, res) {
    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_400x400.jpg",
        name: "Rocketseat",
        description: 'Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀<a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        title: "Principais tecnologias utilizadas",
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
        ]
        
    }
    return res.render("about", {about})
})


server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function() {
    console.log("server is running")
})
