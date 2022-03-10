// function greet(){
//     console.log('hi i am greet message')
// }

// //to  create multiple elements
// function elementCreation(){
//    var z= document.createElement('h1');
//    z.textContent="deepavali holidays are near!!!";
//    document.body.appendChild(z);
// }

//to create a element only once
// var z= document.createElement('h1');
// document.body.appendChild(z);
// function elementCreation(){
//     z.textContent="deepavali holidays are near!!!";
  
//  }

// function change(){
//     console.log('divya is so innocent');
// }
 
//Local storage

var person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    
    };
    var person2 = {
    firstName: 'John',
    lastName: 'Dove',
    age: 25,
    
    };
    var person3 = {
    firstName: 'Johny',
    lastName: 'Dude',
    age: 25,
    
    };
   //setItem method
   
   window.localStorage.setItem('user1', JSON.stringify(person1));
   window.localStorage.setItem('user2', JSON.stringify(person2));
   window.localStorage.setItem('user3', JSON.stringify(person3));
   
   //getItem method
   var x = window.localStorage.getItem('user1');
   console.log(x);
   
  // converting string to object
   var y = JSON.parse(window.localStorage.getItem('user1'));
   console.log(y);
   
   //removeItem method
   var z = window.localStorage.removeItem('user2');
   console.log(z);
   
   //key method
   var keyName = window.localStorage.key(3);
   console.log(keyName);

//=============session storage============
   var obj1={
    name:'Bala',
    place:'mysr'
    }
    
    console.log(obj1);
    var obj2={
     name:'Ankita',
     place:'Mumbai'
     }
     
     //console.log(obj1);
    
    //set the value for a name
    //sessionStrorage.setItem('keys','values')
    sessionStorage.setItem('user1', JSON.stringify(obj1));
    sessionStorage.setItem('user2', JSON.stringify(obj2));
    
    // to remove value
    //removeItem('keys')
    sessionStorage.removeItem('user1')
    
    //to get item and to print it
    //getItem('keys') it will returns value as a string
    
     var demo=sessionStorage.getItem('user2')
     console.log('after getting',demo);
    
     //to get one key
     var z=sessionStorage.key(1)
     console.log('key is',z);
    
     //to delete all items from 
     sessionStorage.clear();

     //================cookies=============
     function display() 
 { 
 var value = document.getElementById("color").value; 
 if (value != "Select Color") 
 { 
 document.bgColor = value; 
 document.cookie = "color=" + value; 
 } 
 }





