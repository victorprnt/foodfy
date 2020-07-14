const express = require("express")
const njk = require("nunjucks")
const recipes = require("./data")

const server = express()

njk.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.set("view engine", "njk")
server.use(express.static("public"))
server.use(express.static("assets"))

server.listen(3000, function() {
    console.log("Server is running!!!")
})

server.get("/", function(req, res){
    return res.render("home", { items: recipes})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req, res){
    return res.render("recipes")
})