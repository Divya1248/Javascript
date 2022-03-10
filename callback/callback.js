//tx 1
// function Notifications(sms,email,facebook){
//   console.log("Programs starts...........")
//   sms();
//   email();
//   facebook();
// }
// Notifications(
//     setTimeout(
//     function sms(){
//         alert('i am sms alert!!!')
//     },4000),

//     setTimeout(
//     function email(){
//         alert('email alert!!!')
//     },2000),

//     setTimeout(
//     function facebook(){
//         alert('facebook alert!!!')
//     },6000)
0
// );

// console.log("Programs ends...........");

//ex2
//call back is just a parameter
function welcome(name, callback){
    console.log('program starts.............');
    console.log(`welcome ${name} to the workshop`);
    
    callback();

}

//callback function

function plsvisit(){
console.log('please attend the program');
}

//passing the plsvisit function an callback function
welcome('supriya', plsvisit)
console.log('program ends..................')
           

//ex:3 //program that shows the delay in execution
function great(){
    console.log('hello world');
}

function sayName(name) {
    console.log('hello' + '' + name);
}



for(i=0;10<=i;i++){
    
}

//Priyanka K M: // function notification(sms, email) {
// console.log("Process Starts");
// sms();
// email();
// }

// notification(function sms() {
// alert('send sms');
// },
// function email() {
// alert('send email');
// });

// console.log('End process');

// *********************************
// function greet(name, callback) {
// console.log('Hi' + ' ' + name);
// callback();
// }

// // callback function
// function callMe() {
// console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// ************************************************************************
// ex 3: with setTimeout

// program that shows the delay in execution
function greet() {
 console.log('Hello world');
}

function sayName(name) {
 console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');

// **************************************************************************
// ex 4
// Callback Function Example
function greet(name, myFunction) {
 console.log('Hello world');

 // callback function
 // executed only after the greet() is executed
 myFunction(name);
}

// callback function
function sayName(name) {
 console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);


