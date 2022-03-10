var employee={
    empName: "Rohan",
    empAge: 30,
    empSalary: 30000,
    empPlace: 'Bangalore'

};

// to retrieve all the employee details
console.log("employee all details", employee);

//to retrieve employee details individually using dot notation
console.log('Name is', employee.empName);
console.log('Age is', employee.empAge);
console.log('Salary is', employee.empSalary);
console.log('Place is', employee.empPlace);


//to add the new employee details
employee.designation="Software developer"
employee.isTeamLead=true;
console.log("After adding new employee details", employee);

//to delete the property from employee
delete employee.empAge;
console.log("after deleting age", employee);

