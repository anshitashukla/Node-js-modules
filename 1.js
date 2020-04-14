var stat = require('./2 count');

stat(['anshita','aastha', 'altamash']);

console.log(__dirname);
console.log(__filename);
setTimeout(function(){
    console.log("3 seconds have passed")

}, 3000);

var time=0;
var timer = setInterval(() => {
    time+=3;
    console.log(time +"seconds have passed");
    
    if(time>20)
    clearInterval(timer);


}, 3000);


