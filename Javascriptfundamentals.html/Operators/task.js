//age question
// var a=prompt('enter your age');
// if(a>19){
//     document.write('create an account');

// }
// else{
//     document.write('acess delete to account');
// }//

//greatest number in given 3 numbers
var a=5;
var b=22;
var c=10;
if(a>b||a>c)
{
    document.write('greatest number is', a);
}
else if(b>c){
    document.write('greatest number is', b);
}
else{
    document.write('greatest number is', c);
}

//second greatest number
var a=5;
var b=22;
var c=10;
if(a>b && a>c)
{
   document.write('greater num is', a + '<br>')
   if(b>c){
       document.write('second greatest' , b+ '<br>');

       document.write('second greatest' , b+ '<br>');


   }

   else if (b>c){
       document.write('second highest is' , c+ '<br>');
       document.write('third highest' , b+ '<br>');
   }

}

//smallest number
var a=5;
var b=22;
var c=10;
if(a<b&&a<c)
{
    document.write('smallest number is', a);
}
else if(b<c){
    document.write('smallest number is', b);
}
else{
    document.write('smallest number is', c);
}

//check even or odd
var a=4;
if(a%2==0)
{
    document.write(a, 'is a even number'+'<br/>');
}
else{
    document.write(a, 'is a odd')
}

//switch cases
//var day= 5
//switch(day)
switch(new Date().getDay()){
    case 0: console.log("sunday")
    break;
    case 1: console.log("Monday")
    break;
    case 2: console.log("Tuesday")
    break;
    case 3: console.log("Wednesday")
    break;
    case 4: console.log("Thursday")
    break;
    case 5: console.log("Friday")
    break;
    case 6: console.log("Saturday")
    break;
}


//if and else
var age=prompt("enter age");
if(age>=18)
{
    alert("you are eligible to vote");
}
else{
    alert("you are not eligible to vote");
}

//nested if
var num=prompt("enter the number");
if(num>=10){
    document.write("num is more than 10");
    if(num>10){
        document.write("num is else morethan 10");
    }

    
}
else{
    document.write("num is less");
}