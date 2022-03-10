//1st
// var dwayne = {}, daniel = { firstName: 'Daniel'}, jason = {key: 'jason'};
// dwayne[daniel]=123;
// dwayne[jason]=456;
// console.log(dwayne[daniel]);

// //2nd
// var func = (function(a){
//     delete a;
//     return a;
//     })(5);
    
//     console.log(func);


// // What is the output of the following code snippet?
// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});

// // 4. What's the output?
// var c = { greeting: 'Hey!' };
// var d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// //5. What's the output?

// var greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// // 6. what's the output?
// var number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// // 7. what the value of sum?
// var sum = eval('10*10+5');
// console.log(sum);

// // 8. what is the output ?
// var num = 8;
// var num = 10;

// console.log(num);

// // 9. whats the output ?
// var obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);

// // 10. What's the output?
for (let i = 1; i < 5; i++) {
if (i === 3) continue;
console.log(i);
}   

// // 11. whats the output?
// var a = {};
// var b = { key: 'b' };
// var c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);


// // 12. What's the output?
// console.log(typeof typeof 1);

// // 13. whats the output?
// var numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

// // 14. whats the output?
// !!null;
// !!'';
// !!1;
// console.log(!!null)
// console.log(!!'')
// console.log(!!1)

// // 15. What's the output?
// var person = { name: 'Lydia' };
// var members = [person];
// person = null;

// console.log(members);

// // 16. whats the output?
// var person = {
// name: 'Lydia',
// age: 21,
// };

// for (const item in person) {
// console.log(item);
// }

// // 17. What's the output?
//  console.log(3 + 4 + '5');

// // 18. What's the output?
// var name = 'Lydia';
// age = 21;

// console.log(delete name);
// console.log(delete age);

// // 19. whats the output?
// var numbers = [1, 2, 3, 4, 5];
// var [y] = numbers;

// console.log(y);

// // 20. whats the output?
// var settings = {
// username: 'lydiahallie',
// level: 19,
// health: 90,
// };

// var data = JSON.stringify(settings, ['level', 'health']);
// console.log(data);

// 21. whats the output?
function addToList(item, list) {
return list.push(item);
}

var result = addToList('apple', ['banana']);
console.log(result);

// 22. whats the output?
var myLifeSummedUp = ['coffee', 'laptop', 'wine', 'chocolate'];

for (var item in myLifeSummedUp) {
console.log(item);
}

for (var item of myLifeSummedUp) {
console.log(item);
}

// 23. whats the output ?
var list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);


//----------------------morning session---------------------
//What is the output of the following code?
var arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);

// 2. What is the output of the following code snippet?
var arrayOfLetters = ['a','b','c','d','e','f'];
var anotherArrayOfLetters = arrayOfLetters;
arrayOfLetters = [];
console.log(anotherArrayOfLetters);

// 3. Take this array var array = [1,2,3,4,5] and copy it using the slice method and the for loop method.
var array =[1,2,3,4,5];
var i=1;
for(i=1;i<array.length;i++)
{
    console.log(i);
}
// 4. Empty this array var array = [1,2,3,4,5]
var array=[1,2,3,4,5];
console.log(array.splice(0,5));
console.log(array);
// 5. What type is an Array set to?
var array3 = [1,2,3,4,5];
console.log(typeof(array3));

// 6. How can you check if something is an Array?
var check = [1, 2, 3];
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({
foo: 123
}));
console.log(Array.isArray('foobar'));
console.log(Array.isArray(undefined));
console.log(Array.isArray(check));

// 7. What will be returned if you look for the index of something that does not exist?
 var arr= ['a','b','c','d']; console.log(arr.indexOf(7));

// 8. Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar'];

function items(){
    var items =['milk','bread','sugar'];
    if(items[0]='milk')
    {
        console.log('milk is exist');
    }
    else{
        console.log('milk is not exist');
    }
}items();
// 9. Now you've found milk exists add some code to find the index of milk and remove that item.
var items =['milk','bread','sugar'];
console.log(items.indexOf('milk'));
console.log(items.splice(0,1));
console.log(items);
// 10. What is the length of these arrays
console.log(arr1 = [,,,]);

console.log(arr2 = new Array(3));
console.log( arr3 = [1,2,3,4,5]);
console.log(array = [ [1,2,3], [4,5,6] ]);
//console.log( array[0].length = [ [1,2,3], [4,5,6] ]);

//11. What are the results of these splice and slice methods

var a = ['zero', 'one', 'two', 'three'];
var names = ['jason', 'john', 'peter', 'karen'];

var sliced = a.slice(1, 3);
var spliced = names.splice(1,3);

console.log(sliced);
console.log(a);
console.log(spliced);
console.log(names);


// 12. Var a = [ ] ;

// We take an empty array and
var a = [ ] ;
a.unshift(1);
var a = console.log(a)
var a = [ ] ;
a.unshift(22);
var b = console.log(a)
a.shift();
var c = console.log(a)
a.unshift(3,[4,5]);
var d = console.log(a)
a.shift();
var e = console.log(a)
a.shift();
var f = console.log(a)
a.shift();
 var g = console.log(a)