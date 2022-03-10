//Variable hoisting
//after hositing
var name;
console.log(name)
name="ritu";

// before hoisting
console.log(name)
var name='ritu';
name;

//function hoisting 
function hoisting() {
    message="hii how are you"
    console.log(message);
    var message;
}
hoisting();
