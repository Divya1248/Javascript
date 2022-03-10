//first
var bar = 1;
function foo() {
var bar = 2;
}

foo();
console.log(bar);
//global variable is used outside and inside thatswhy it getting 1 as answer

//second
function scream(words) {
    words = words + '!!!!';
    console.log(words);
    }
    
    scream('Yipeee');
    // if we remove return then will get answer

//third
function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let tries = 0;
  let result;
  
  do {
    result = randomNumberBetween(1, 6);
    tries += 1;
  } while (result <= 2);
  
  console.log('It took ' + String(tries) + ' tries to get a number greater 2');

  //fourth
  let myArray = {
    name: 'divya', Age: 23, Place: 'Pune'};
    
    for (let i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i]);
    }

//fifth
var  a= [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
for( i =0;i<a.length;i++) {

  if(a[i]%2==0){
        document.write(a[i]+ "<br>");
   }
   

 }
    //sum(2)(3)
    function sum(a,b){
      return a+b;
    }
   var a= sum(2,3);
    console.log(a);

  //reverse a string
function ReverseString(str) {
 return str.split('').reverse().join('')
}
document.write(ReverseString("Geeks for Geeks"))


  //check object is empty or not
  var car = {};
  var isEmpty = Object.entries(car).length > 0; //false
  console.log(isEmpty);
  
  var car = {make: "Opel", year: 2015};
  var isEmpty = Object.entries(car).length > 0; //true
  console.log(isEmpty);
  