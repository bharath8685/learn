const joke=require('give-me-a-joke')
var colrs = require('colors');
colrs.setTheme({
    data:'red'
})
joke.getRandomDadJoke(jokkes=>{
    console.log(`${jokkes}` .data)
})
// console.log(colrs.trap('Run the trap')); // Drops the bass
