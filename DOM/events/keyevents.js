// //onkeydown event
// var eleKeydown = document.getElementById('one');
// eleKeydown.onkeydown = function(){
//     console.log('triggered');
// }


// //binding the data
// var ele= document.createElement('h1');
// var third = document.getElementById('twoway');
// third.addEventListener('keyup',function(){
//     ele.textContent= third.value;
//     document.body.appendChild(ele);
// })

//writing events using addEventListener
var ele1= document.getElementById('twoway');
var bind= document.createElement('p');
ele1.addEventListener('keyup', function(){
    bind.textContent=ele1.value;
    //use value when taken input from user
    console.log(ele1.value);
    console.log('key up event');
// to print the value in the browser as well
    document.body.appendChild(bind);
})