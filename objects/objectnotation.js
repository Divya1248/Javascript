var employee={
    empName:'Ganavi',
    empId:'TY123',
    empDesignation:'Software Engineer'
};

//Dot notation
console.log("employee id is", employee.empId);


//Bracket notation
console.log("employee name is", employee['empName']);


//In operator: to find out the current key is present in the object or not
console.log('empName' in employee);


//to check whether the property is present in an object
console.log('emp' in employee);// returns boolean, false
console.log(employee.emp); //undefined


//Nested objects
var userDetails={
    firstName:'Shiva',
    lastName:'Prakah',
    email:'shiva@gmail.com',
    phone: 123456789,
    address:{
        streetNo:2,
        area:'RR Nagar',
        city:'Bangalore',
        state:'Karnataka',
        pincode: 560051
    }
}

console.log("Email Id:", userDetails.email);
console.log("Area:", userDetails.address.area);
console.log("Pincode:", userDetails.address.pincode);


//after hoisting




    
