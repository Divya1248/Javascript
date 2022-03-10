// var parentele= document.getElementById('main');
// var childele = document.getElementById('hint');
// parentele.removeChild(childele);

// //another way to remove child
// var childele = document.getElementById('hint');
// childele.parentNode.removeChild(childele);

// ==============replaceChild()========
//accepts two parameters : the node to insert and the node to be replaced
//syntax: parentNode.replaceChild
// var parenele=document.getElementById('main');
// var oldpara=document.getElementById('hint');

// //creating new element
// var newpara = document.createElement('div');
// var newContent= document.createTextNode("testyanta software solution");
// newpara.appendChild(newContent);

// //replace oldpara with newpara
// parenele.replaceChild(newpara,oldpara);


// //accessing the child nodes
// var main = document.getElementById("main");
// //console.log(main.firstChild); //output: #text
// //console.log(main.firstElementChild.firstChild);
// //console.log(main.firstElementChild.innerHTML); //another way to print o/p


// // console.log(hint.firstElementChild.lastChild.nodeValue);
// var main = document.getElementById("main");
// alert(main.firstElementChild.nodeName);
// main.firstElementChild.style.color= "red";
// var hint= document.getElementById("hint");
// hint.firstElementChild.style.color="green";


// inner html and inner text
var variable =document.getElementById("txt")
console.log(variable.innerText);
console.log(variable.innerHTML);


