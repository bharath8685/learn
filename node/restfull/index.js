const express = require('express')
const app =express();
port=5000

app.get('/tacos', (req,res)=>{
    console.log(req)
})




app.post('/tacos', (req,res)=>{
    console.log("super amma")
    res.send('supper amma')
})




app.listen(port, ()=>{
console.log(`listening on ${port}`)
})




export GOROOT=
export GOPATH=
export GOBIN=
export PATH=$GOPATH/bin:$GOROOT

