var arr=['sql', 'javascript', 'react', 'nodejs', 'mangoDB','angular'];

// to display all the array elements
console.log(" All Array elements are:", arr);

// to retrieve the array elements individually
console.log("the element in index 4 is", arr[4]);

//to find the length of array
console.log("the length of the array is", arr.length);

//to replace with the new element
console.log("the new element adding in index to is", arr[2]='Redux');
console.log("after replacing the elements are", arr);

// to add a new element 
console.log("adding the new element", arr[6]="softskills");
console.log("after adding new element", arr.length);
console.log("new array as the elements", arr);

//to convert array to string 
console.log("Array to string " , arr.toString());


//complex array
var contents = [
    {id:1, name:'a'},
    {id:2, name:'b'},
    {id:3, name:'c'}
];
console.log(contents);
console.log(contents[2].name);

var contents = [
    {id:1, name:'a', marks:243}
    
];
console.log(contents[0].name, contents[0].marks);
