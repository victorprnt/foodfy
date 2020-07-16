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

server.listen(3000, function () {
    console.log("Server is running!!!")
})

server.get("/", function (req, res) {
    return res.render("home", { items: recipes })
})

server.get("/about", function (req, res) {
    return res.render("about")
})

server.get("/recipes", function (req, res) {
    return res.render("recipes", { items: recipes })
})

server.get("/recipes/:id", function (req, res) {
    const recipeIndex = req.params.id

    // console.log(recipes[recipeIndex])
    console.log(recipeIndex)
    return res.render("recipe", { recipe: recipes[recipeIndex] })
})

server.use(function (req, res) {
    res.status(404).render("not-found")
})