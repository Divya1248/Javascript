

//1. What will log to console the following code snippet:

// (function immediateA(a) {
// return (function immediateB(b) {
// console.log(a); // What is logged?
// })(1);
// })(0);

// //2. What will log to console the following code snippet:

var count = 0;
(function immediate() {
if (count === 0) {
var count = 1;
console.log(count); // What is logged?
}
console.log(count); // What is logged?
})();








// //3. What will log to console the following code snippet:

for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
}





// //4. What will log to console the following code snippet:

// function createIncrement() {
// var count = 0;
// function increment() {
// count++;
// }
// var message = `Count is ${count}`;
// function log() {
// console.log(message);
// }

// return [ increment,log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log(); // What is logged?





//5. The following function createStack() creates instances of stack data structure:

// function createStack() {
// return {
// items: [],
// push(item) {
// this.items.push(item);
// },
// pop() {
// return this.items.pop();
// }
// };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();
// stack.items;
// stack.items = [10, 100, 1000];
// console.log(stack)

// //===============examples===============
// //getElementById 
