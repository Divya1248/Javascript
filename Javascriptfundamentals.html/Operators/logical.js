// AND operator
var a=100;
var b=10;
if(a<b && b<50)
{
    document.write('condition satisfied'+'<br/>');
}
else{
    document.write('condition not satisfied'+'<br/>');
}

//OR operator
var a=100;
var b=10;
if(a<b || b<50)
{
    document.write('condition satisfied'+'<br/>');
}
else{
    document.write('condition not satisfied'+'<br/>');
}

//NOT operator
var a=100;
var b=10;
if(! b<50)
{
    document.write('condition satisfied'+'<br/>');
}
else{
    document.write('condition not satisfied'+'<br/>');
}


//short circuited
var b=false;
var result= b&& (1/0);
console.log(result);

var b=true;
var result= b && (1/0);
console.log(result);