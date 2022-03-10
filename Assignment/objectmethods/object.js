

//object.defineproperty = new property directly on object and returns the object. 
//to change the flag we can use object.defineproperty
//syntax= Object.defineproperty(obj,prop,{description})
// var object={
//     name:'divya',
//     age:21,
//     salary:2000,
    
// };
// var object1= Object.defineProperty(object,'name',{
//     value:'priyanka'


// });
// console.log(object);
// console.log(object1);

// //obejct freeze
// var obj1={
//     name:'divya',
//     age:21,
//     place:'bangalore'
// }

// var obj2=Object.freeze(obj1);
// obj2.age=28;
// obj2.name='sita';
// console.log(obj2.age);
// console.log(obj2.name);

// //object.assign
var target = {a:1, b:2, c:4};
var source = {a:1, c:2, d:3, e:null};

var returnedTarget = Object.assign(target, source);

console.log(returnedTarget);

``
// //object.entities
var person ={
    firstName:'john',
    lastName: 'doe',
    age: 25,

};
var kv=Object.entries(person);
console.log(kv);
console.log(kv[2]);

//object.create()
var a = Object.create({});
var b= Object.create(null);
console.log(a);
console.log(b);



//object.defineproperties
// syntax
// Object.defineProperties(obj, {property name:{value}})

var object1 = {
    name: 'kiran',
    age: 22,
    salary:20000
   };
   
   console.log(object1)
   var object = Object.defineProperties(object1, {
    property1: {
    value: 42,
    
    },
    name: {
    value:'gagan'
    }
   });
   
   console.log(object);
   // console.log(object1.property1);

// //object.key
// object =keyvalue
//ex1
var object1 = {
 1: 'somestring',
 6: 42,
 5: false
 };
 
 console.log(Object.keys(object1));

// object =keyvalue
//ex2
 var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));

//ex3
// var object1 = {
// a: 'somestring',
// 😄 42,
// b: false
// };
 
// console.log(Object.keys(object1));

//ex4
 var object4 = {
 1: 'somestring',
 6: 42,
 // 5a: false
 };//we can use the combination of letter and number,but it should not start with number
 console.log(Object.keys(object4));

//ex5
 var object2 = {
 1: 'somestring',
 6: 42,
 a5: false
 };
 
 console.log(Object.keys(object2));
 //ex6
//  var object3 = {
//  a: 'somestring',
//  b: 42,
//  :false
//  };
 
 console.log(Object.keys(object3));

 //this keyword
 //this keyword
var myVar = 100;

function myFunction() {
 var myVar = 200;

 console.log(myVar); // 200
 console.log(this.myVar); // 100
}

myFunction();

