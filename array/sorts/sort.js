// be default sort will be done by ascending
var months = ['march','jan','feb', 'dec']
months.sort();
console.log(months);


var array1=[1,11,4,21,12000];
array1.sort();
console.log(array1);

var num=[10,25,45,65,35,0.5,.6,-5,-6,-.5]
num.sort();
console.log(num);


//ascending
var numbers=[8,23,2,2,18,24,27];
numbers.sort(function compare(a,b){
    return a-b;
});
console.log(numbers);

//descending
var numbers=[8,23,2,2,18,24,27];
numbers.sort(function compare(a,b){
    return b-a;
});
console.log(numbers);

//reduce method
var x=[1,2,3,4,5];
var sum=x.reduce(function(total,value,index,array){
    return total+value;
},0);
console.log(sum);

//we can give console.log(index) and array also it gives index values
//in initial value we can give negative values but default is 0




