var events = require('events');
var util = require('util');

var person = function(name){
    this.name=name;
}

util.inherits(person, events.EventEmitter);

var jesus = new person('Jesus');
var mary = new person('Mary');
var joseph = new person('Joseph');
var people =[jesus, mary, joseph]

people.forEach(function (lolo) {

    lolo.on('someEvent', function(msg){
        console.log(lolo.name +'said: '+ msg);
    });
    
})

jesus.emit('someEvent', 'hi this is james');