var items = [
    {id:1, name:'wallet',price:500},
    {id:2 , name:'Lakmelipstick',price:700},
    {id:3, name:'shoes', price:2000},
    {id:4, name:'watch',price:10000},
    {id:5, name:'mask', price:50}
]; 
console.log(items);
   var filterPrice = items.filter(function(value,index){
    if(value.price>500){
    return true;
    }
    else{
    return false;
    }
   });
   
    console.log("Items above 500rs are",filterPrice);
   
   var addPrice = filterPrice.map(function(value,index){
    value.price = value.price + 50;
    return value;
   })
   
   console.log("Final Price for items is",addPrice);