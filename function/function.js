//simple example
function Message(){
    console.log("Hi All welcome to the function")
}
Message();

// //Anonymous function : No name
// function() {
//     console.log('Hi All')
// }

 //Anonymous function with function expression
var demo= function() {
    console.log('Hi All')
}
demo();

//Naming function : with function  Name
function Sum() {                                                     //called
    console.log("Hi All function with name")                         //called
}
Sum();//calling

//function expression : Declaring the function using a variable
var test = function Multiply(){
    console.log("I'm very much sad")
}
test();

// Immediate invoke function: wrapping the function within the methods
//it can be called by once
(function (){
    console.log("im an life function")
})();



//function with parameter
function Welcome(message){
    console.log("Hi Arun , the message", message)
}
Welcome('congrats for participating');


//Addition using two parameters
function Addition(a,b) {
    return a+b;
}
var results=Addition(100,234);
console.log('the sum was', results);

//ex:2
function getName(firstname,lastname){              // parameters are compulsaory  because next line we are calling with same name
    console.log('hello' + firstname + lastname);
}
getName('gokul', 'krishna');//hellogoaplkrishna
getName('karthik');//hello karthik undefined 
getName('gokul', 'karthik', 'krishna');//hello gopal karthik

//function with argument object
function getName(firstname,lastname, age){                           // parameter are not requires because we are caling arguments
    console.log('hello'+ ' ' + arguments[0] + ' '+  arguments[1]+ ' ' + arguments[2]);
}
getName('gokul', 'krishna');
getName('karthik', '', 30);// space is also taken value


//return value to function
function sum(val1,val2){
    return val1+val2;
};

var result = sum(10,20);
console.log(result);

//without return values to the function results is undefined
function Multiply(val1,val2)
{
    console.log(val1*val2);//200
};
result= Multiply(10,20);
console.log(result) // undefined becoz its doesnot return the value

 //example 
 function sum(a=100,b=30){
    return a+b;
  }
  console.log(sum());
  console.log(sum(10,20));
  console.log(sum(10));
  console.log(sum(20, ));
  console.log(sum('' ,100));


  function sum(a,b=10){
    return a+b;
  }
  console.log(sum());
