// //global variable
// var personName= 'Dhanush';
// function getuserName() {
//     var name = "hello" + personName;
//     console.log(name)
// }
// alert(personName);
// getuserName();

// //example 2
// var username='vishal';
// function ModifyName(){
//     username= 'omkar';
// }
// function showName(){
//     alert(username);
// }
// alert(username); //vishal
// ModifyName(); //omkar
// showName(); //vishal


// //local variable
// function showMessage(){
//     var message='Everything happens as a reason';
//     alert(message);
// }
// showMessage();
// console.log(message);// getting an error because local give names inside function


// without giving var keyword inside function that is local but it turns to global it can access anywhere
function getName(){
    company='ttt';
    document.write(company);
}
getName();
alert(company);