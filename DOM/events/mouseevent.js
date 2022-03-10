//calling events through html files
function addStyle(){
    const mouseele = document.getElementById('add');
    mouseele.className = 'addStyle';
} 

function removeStyle(){
    const mouseout = document.getElementById('add');
    mouseout.className = 'removeStyle';
}

// calling events through js
const btElement = document.getElementById('one');
btElement.onclick = function () {
    alert('you clicked me!!!');
} 


var x= document.getElementById('mybtn');
x.addEventListener("mouseover",function(){
    document.getElementById('test').innerHTML = Date();
})
