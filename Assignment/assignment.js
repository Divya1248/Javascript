// var a=prompt("enter value");
// var foo=20;
 
// if(foo==a){
//     document.write('bar');
// }
// else{
// document.write('qux()');
// } 

// // Second question
// var  a= [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
// for( i =0;i<a.length;i++) {

//   if(a[i]%2==0){
//         document.write(a[i]+ "<br>");
//    }
   

//  }

//  //Third question
//  var  a = [[4 , 5] ,
//      [ 8 , 9, 9 ], 
//        [8,2,9,4]];
// for( var i =0;i<a.length;i++) {
//     for( var j = 0 ; j<a[i].length;j++){

//            if(a[i][j]%2==0){
//                document.write(a[i][j] +"<br>");
//            }

//         }

//          if(a[i]%2==0){
//             document.write(a[i]+ "<br>");

//       }
//     }

//     //Fourth question
//     var a = [2, 4, 6, 3, 10],
//    b = 3;

// if(a.includes(b)) {
   
//     document.write("yes we have three"+ '<br/>');
// }

// //Fifth question
// var arr = [

//       ["helo" , "world"],
//       ["sashi sir","Raghu sir" , "shishira bhat sir" , 6 , 88],
//       [4,5 , 12]
    
    
//       ];
    
    
//       arr[2].splice(3,1,606);
    
//      document.write(arr + '<br>');

//      //Sixth question
// var a = prompt("Give a Number");

//    if(a>0){
//        document.write(  a  + " is "  + " positve " + "<br>");
//        if(a%2==0){
//            document.write( a  + " is " + " even "+ "<br>" );
//        }
//        else{
//            document.write(a + " is " + " odd " + "<br>")
//        }
//     }


//     else{
//           document.write(  a  + " is "  + " negative " + "<br>");
          
//            a *= -1; 
     
//         if(a%2==0){
//             document.write( a  + " is " + " even " + "<br>");
//         }
//         else{
//             document.write(a + " is " + " odd "+ "<br>")
//         }
//      }

//-------------------------------1 day----------------------------
 //Return percentage value
var num=prompt('enter the value')
 var x=( num/100)*100;
  console.log(x);

 // strict equal to
     var a=10;
     var  b="10";
  if(a===b)
  {
      document.write('it is strict equal to');
  }
  else{
    document.write('it is not a strict equal to');
  }

  //check array is equal or not 
  var b = [2,3,5,6,2];
//var b = [1,1,1,1];
var count =1;

for(var i=0; i<b.length;i++){

  if(b[0]==b[i+1]){
    count++; //2 
  }

}

if(count==b.length){
  console.log(" all elements are equal");
}

else{
  console.log("all elements are not equal");
}


  // descending order....

var arr = [1 , 2 , 3 ,9 ,8];
var temp = 0; 
for (var i = 0; i < arr.length; i++) { 

  for (var j = i+1; j < arr.length; j++) {     
     
    if(arr[i] < arr[j]) {    
         temp = arr[i];    
         arr[i] = arr[j];    
         arr[j] = temp;    
     }

  }     
}    
 console.log(arr);


 //sort by its alphabetic order
countries = ["c","a","b"];

var size = countries.length;  
//logic for sorting   
for( i = 0; i<size-1; i++)   
{  
for (var j = i+1; j<countries.length; j++)   
{  
//compares each elements of the array to all the remaining elements  
if(countries[i]>(countries[j]))   
{  
//swapping array elements  
var temp = countries[i];  
countries[i] = countries[j];  
countries[j] = temp;  
}  
}  

}
console.log(countries);


 //12avg 

// var arr = [1 , 2 , 3 ];
// var sum = 0 ;
// var avg;
//  for(var i = 0 ; i<arr.length ; i++){
 
//    sum +=arr[i]; 

//  }
//  avg = sum / arr.length;
//  console.log(avg);

// //  //13 longest string
//  arr = ["ramprasad is bad boy " , "comedy " , "Raghu 360"]



//   for(var i = 0 ; i < arr.length; i++){

//     for(var j =1 ; j<arr.length ; j++){ 

    if(arr[i].length < arr[j].length) {    
//                temp = arr[i];    
//                arr[i] = arr[j];    
//                 arr[j] = temp;    
//             }
//           }


// }
    
   
//  console.log("longest string " + arr[0]);

//object
var user={
  name:'divya',
  id:123,
  sal:50000

};
for(var alldetails in user)
  console.log(alldetails);
  console.log(user[alldetails]);

  //example 
  function sum(a=100,b=30){
    return a+b;
  }
  console.log(sum());
  console.log(sum(10,20));
  console.log(sum(10));
  console.log(sum(20, ));
  console.log(sum('' ,100));


  function sum(a,b=10){
    return a+b;
  }
  console.log(sum());


  const object1 = {};  
Object.defineProperty(object1, 'property1', {  
  value: 42,  
  value: 52,  
  value: 542,  
  });  
object1.property1 =177;  
// throws an error in strict mode  
console.log(object1.property1); 

  
