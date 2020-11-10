// 1-create server
const express = require('express')
const nunjucks = require('nunjucks') //4 chamando nunjucks

const server = express()
const videos = require("./data") //6 chamando o array

server.use(express.static('public')) // 5 chamando o css

// configuring template engine
server.set("view engine", ".njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// 3-adicionando rota
server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/58216968?s=460&u=1c674a0a3a52620fe4bd90fea45ca7288dae8803&v=4",
        name: "José Ulombe",
        role: "Aluno - Rocketseat",
        description: 'Programador Front-end, focado em aprender as melhores tecnologias na área de programção. Estudante da  <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "Github", url: "https://github.com/julombe"},
            { name: "Twitter", url: "https://twitter.com/jose_ulombe"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/jos%C3%A9-ulombe-31744480/"}
        ]
    }
    return res.render("about", {about})
})

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", { items: videos })
})


//adicionando rota da página video
server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video) {
        return video.id == id
        
    })

    if (!video) {
        return res.send("video not found!")
    }

    return res.render("video", { item: video })
})



// 2-start server
server.listen(5000, function() {
    console.log("server is running")
}) 