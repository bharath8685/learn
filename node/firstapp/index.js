const express = require('express');
const app = express();
const colr = require("colors")

// app.use((req, res)=>{
//     console.log("printing..........")
//     // var g=colr.green("hell brother nuvu keka")
//     var g={color:"red"}    
//     res.send(g)
// })

app.get('/cats', (req, res) => {
    res.send({ cat: "meow" })
})
app.post('/cats', (req, res) => {
    res.send({ cat: "meow_posts" })
})

app.get('/r/:subredit', (req, res) => {
const {subredit} =req.params;
    // res.send({ cat: "meow_last" })
    res.send(`searching for ${subredit} subredit`)
})


app.get('/search', (req, res) => {
    // console.log(req.query)
const {name} = req.query
console.log(name)
    res.send("Welcome to Search!!!")
})

app.get('/', (req, res) => {
    res.send("Welcome to My World!!!")
})

app.listen(3000, () => {
    console.log("started server on 3000".green)
})


