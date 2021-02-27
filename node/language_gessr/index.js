const franc=require('franc')
const langs=require('langs')
var colrs = require('colors');
var args =process.argv.slice(2)
console.log(args)

var m=franc(args[0])
if (m=="und"){
console.log('please pass correct language')
}
else{

    var g=langs.where("3", m) 
    console.log(g.name.green)
}
// => 'nno'
// franc("what are you doing")
// console.log(JSON.parse(m))

// console.log(`language is ${m}`)