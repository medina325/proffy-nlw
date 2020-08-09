// Servidor
const express = require("express")
const server = express()

const { 
    pageLanding, 
    pageStudy, 
    pageGiveClasses, 
    saveClasses 
} = require("./pages")

//configurar nunjucks (Template Engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Início e configuração do servidor
server
// receber os dados do req.body (pra não passar pela URL)
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5000)

// server.use(express.static("public")) // .use é sempre configuração do servidor
// .get("/", (req, res) => {
//     return res.sendFile(__dirname + "/views/index.html")
// }) 
// .get("/study", (req, res) => {
//     return res.sendFile(__dirname + "/views/study.html")
// })
// .get("/give-classes", (req, res) => {
//     return res.sendFile(__dirname + "/views/give-classes.html")
// })
// .listen(5000)

// console.log(__dirname + "/views/index.html")