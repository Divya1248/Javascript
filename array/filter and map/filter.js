//filter
var numbers = [100,200,300,400,500];

// var afterfilter= numbers.filter(function (value , index){
//     console.log("All values are ready to filtering", value)
//     if(value[1]){
//         return true;
//     }
//     else {
//         return false;
//     }
// })

// //console.log("before filter",numbers);// 100 200 300 400 500
// console.log("after filter",afterfilter);// 300 400 500

// //shorthand
// var afterfilter = numbers.filter((value)=>value>200);
// console.log(afterfilter);

// //Map
var numbers= [100,200,300,400];
// var mappednums = numbers.map(function (b,a){
//     b = b +50;
//     return b;
// })
// console.log("before mapping", numbers);
// console.log("after mapping", mappednums);


//shorthand
var mappednums = numbers.map((value)=> value+50);
console.log(mappednums);

