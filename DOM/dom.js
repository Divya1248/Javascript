//recursion
// function getName(name){
//         console.log('Hello'+name);
//         getName();
//     }
//     getName('Rita');
    
    // function countDown(number){
    //     // display the number
    //     console.log(number);
    
    //     // decrese the number value
    //     const newNumber=number-1;
    
    //     // base case
    //     if(newNumber>0){
    //         countDown(newNumber);
    //     }
    // }
    // countDown(4);

//     //DOM
// var ulElement = document.createElement('ul');
// ulElement.textContent='colors';

// var liElement1 = document.createElement('li');
// liElement1.textContent='royal blue';

// var liElement2 = document.createElement('li');
// liElement2.textContent='red';

// var liElement3 = document.createElement('li');
// liElement3.textContent='green';

// var liElement4 = document.createElement('li');
// liElement4.textContent='yellow';

// ulElement.appendChild(liElement1);
// ulElement.appendChild(liElement2);
// ulElement.appendChild(liElement3);
// ulElement.appendChild(liElement4);

// console.log(ulElement);

// document.write(ulElement);
// document.body.appendChild(ulElement);


// //1 st assingment
// var btElement = document.createElement('button');
// btElement.textContent='register';

// document.body.appendChild(btElement);


// // // 2nd assingment
// var a=['a','v','c','d','e','f']

// for(i=0;i<a.length;i++){
//     var btElement=document.createElement('button');
// btElement.textContent=a[i];
// document.body.appendChild(btElement);
// }


//task
var table= document.createElement('table');
var row1 = document.createElement('tr');
 document.body.appendChild(row1);

var head= document.createElement('th');
head.textContent='name';
head.style.color="red";
document.body.appendChild(head);

var row2 = document.createElement('tr');
document.body.appendChild(row2);

var data = document.createElement('td');
data.textContent='Divya';
document.body.appendChild(data);

document.body.appendChild(table);


