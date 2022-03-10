// function Counter() {
//     var counter = 0;
//     setTimeout(function () {
//     var innerCounter = 0;
//     counter += 1;
//     alert("counter = " + counter); //
   
//     setTimeout(function () {
//     counter += 5;
//     innerCounter += 1;
//     alert("counter = " + counter + ", innerCounter = " + innerCounter)//
//     }, 500);
   
//     }, 1000);
//    };
   
//    Counter();


   //clousers
//    // Sample() and getNum() functions variables doesn't collide
function Sample() {
var count = 100;
console.log("Count was", count);
}

function getNum() {
var count = 10;
console.log("Number was", count);
}
Sample();
getNum();

//Closures:
//  function outerFunction() {

//     // outer scope
//     var outerVar = 'Im a outer variable ';
//     document.write(outerVar + '<br/>');
    
//     function innerFunction() {
    
//     // inner scope
//     var innerVar = 'Im a inner variable ';
//     document.write(innerVar + '<br />');
//     document.write(outerVar + '<br/>');
//     }
// return  innerFunction()
//     }
//     outerFunction();

// Closures with Counters
// function Counter() {
//  var counter = 0;
//  setTimeout(function () {
//  var innerCounter = 0;
//  counter += 1;
//  alert("counter = " + counter); //

//  setTimeout(function () {
//  counter += 5;
//  innerCounter += 1;
//  alert("counter = " + counter + ", innerCounter = " + innerCounter)//
//  }, 500);

//  }, 1000);
// };

// Counter();

// Ex 5: create a private functions for inc and dec of number
var counter = (function () {
 var privateCounter = 0;
 function changeBy(val) {
 privateCounter += val;
 }
 return {
 increment: function () {
 changeBy(1);
 },
 decrement: function () {
 changeBy(-1);
 },
 value: function () {
 return privateCounter;
 }
 };
})();

alert(counter.value());//
counter.increment();
counter.increment();
alert(counter.value()); //
counter.decrement();
alert(counter.value());//