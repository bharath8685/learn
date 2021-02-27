const figlet = require('figlet')
const colrs =require('colors')
figlet('Hello World!!', function(err, data) {
    // asdas
    if (err){
        console.log(err)
    }
    console.log(data .rainbow)
});