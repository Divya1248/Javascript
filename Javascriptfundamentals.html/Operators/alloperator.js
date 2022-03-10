//addition

var x=4;
var y=2;
console.log('addition', x+y);
console.log('substraction', x-y);
console.log('multiplication', x*y);
console.log('division', x/y);
console.log('modulus', x%y);

//Increement
var x=10;
console.log(++x);

//decrement
var y=12;
console.log(--y);

//assignment
var a=10;
a*=5;
console.log('result',a);
a/=5;
console.log('result',a);
a%=5;
console.log('result',a);

//comparision operators
//1. equals to is just compare the values
var a1=10;
var a2='10';
console.log(a1==a2);

//2. strict equals to used to compare the values also check datatype present
var x=100;
var y='100';
if(x===y){
console.log('equals to');
}
else{
    console.log('not equals to');
}

//3. not equal to is compare only values

var x=10;
var y=20;
console.log(x!=y);
// strict not equals to used to compare values and also datatype present
var x=10;
var y='20';
console.log(x!==y);


//greater than
var x=10;
var y=5;
console.log('x is greater than y',x>y);
console.log('x is less than y',x<y);
console.log('x is greater than or equal to y',x>=y);
console.log('x is less than or equal y',x<=y);



//concatenation 
var a="hello" +"world";
console.log("complete sentence is", a);

var b=10 +"world";
console.log("integer with string", b);





