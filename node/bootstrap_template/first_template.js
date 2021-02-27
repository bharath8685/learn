// const { response } = require('express');
const express =require('express');
const app =express();
const path= require('path')
const redata=require('./data.json')


const port =4000

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname,'public')))
// app.use(express.static('public'))


app.listen(port,()=>{
    console.log(`started server on ${port}`)
})

// app.get('/', (req , res)=>{
// //  res.render('home.ejs')
// res.send('hi')
// })
app.get('/', (req, res) =>{
// res.send("hi")

res.render('home')
})
app.get('/bros',(req,res)=>{
    brothers=["bharath","subbu","sati"]
    res.render('cats',{brothers})
})

app.get('/rand', (req,res)=>{
    const num =  Math.floor((Math.random() *10)+1)
    res.render('rand' ,{ra:num})

})

// app.get('/r/:subreddit', (req,res)=>{

//     const {subreddit}= req.params

//      console.log(subreddit)
//     res.render('subreddit', {subreddit})
// })


app.get('/r/:subreddit', (req,res)=>{

    const {subreddit}= req.params
    var subr=redata[subreddit]

     console.log(subreddit)
     if (subr){
    res.render('subreddit', {...subr})
}else{
    res.send("please search chickens")
}
})