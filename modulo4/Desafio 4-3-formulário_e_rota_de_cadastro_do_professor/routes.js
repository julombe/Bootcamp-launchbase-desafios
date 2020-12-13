const express = require('express')
const routes = express.Router()

// create routes
routes.get('/', function(req, res) {
    return res.redirect("teachers")
})

routes.get('/teachers', function(req, res) {
    return res.render("teachers/index")
})



routes.get('/teachers/create', function(req, res) {
    return res.render("teachers/create")
})

routes.post('/teachers', function(req, res) { 


    const keys = Object.keys(req.body)

    for(key of keys)
    // req.body.key == ""
    if (req.body[key] == "") {
        return res.send("Please, fill all fields!")
    }


    return res.send("req.body") 
})


routes.get('/students', function(req, res) {
    return res.render("students")
})





module.exports = routes