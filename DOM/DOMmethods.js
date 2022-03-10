// var myValue=document.getElementById('test');
// myValue.style.fontSize='20px';
// myValue.style.color='red';

// var x=document.getElementsByTagName('div');
// //x[2].style.color='blue'

// for(var key in x){
//     x[key].style.background='red';
//    // x[key][1].style.fontSize='50px';
// }  

// var x=document.getElementsByTagName('p');
// for(var y in x){
//     if(x[y].textContent=='hello world'){
//         x[y].style.background='orange';

//     }   
// }

// var allElements = document.getElementsByClassName('test');
// document.write('number of elements selected:',allElements.length);
// allElements[0].style.background='pink';
// allElements[0].style.fontSize='30px';
// allElements[allElements.length-1].style.fontStyle = 'italic'

// for(var key in allElements){
//     allElements[key].style.background='green';
// }



// var Employee = function (name, company, salary) {
//     this.name = name || "";       //Public attribute default value is null
//     this.company = company || ""; //Public attribute default value is null
//     this.salary = salary || 5000; //Public attribute default value is null

//     // Private method
//     var increaseSalary = function () {
//         this.salary = this.salary + 1000;
//     };

//     // Public method
//     this.dispalyIncreasedSalary = function() {
//         increaseSlary();
//         console.log(this.salary);
//     };
// };

// // Create Employee class object
// var emp1 = new Employee("John","Pluto",3000);
// // Create Employee class object
// var emp2 = new Employee("Merry","Pluto",2000);
// // Create Employee class object
// var emp3 = new Employee("Ren","Pluto",2500);


// var btn= document.getElementById("test");
// console.log(btn);
// console.log(btn.innerHTML);

// ================================================================================================================================
// //using ordered list and list as chocolate is changed by dark chocolate 
// var x= document.getElementById('deserts');
// var sweets1=document.createElement('li');
// sweets1.textContent='champakali';
// var sweets2=document.createElement('li');
// sweets2.textContent='jamun';
// x.appendChild(sweets1);
// x.appendChild(sweets2);
// document.body.appendChild(x);
// var newx=document.getElementById('new')
// newx.textContent='dark chocolate';
// console.log(x);
// console.log(x.innerHTML);

//==========================================================================================
// var a=document.getElementById('abbs');
// var b= document.getElementsByTagName('b');
// for(var key in b){
//    b[key].textContent='DUMMY';
// }

//===========================queryselector()========
// var x=document.querySelectorAll('ul li')
// for(var ele of x){
//     document.write(ele.innerHTML + '<br>');
// }

// x=document.querySelectorAll('ul li.tick');
// x[0].style.background ='grey';
// x[1].style.background ='orange';


// var x = document.querySelector(".comp");
// x.style.color ='red';
// //x[1].style.color='blue';

//=====================getElementByName()===========
var b=document.getElementsByName('n5');
document.write(b[0].name);
b.className='.add';