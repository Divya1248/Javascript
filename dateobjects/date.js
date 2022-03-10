var date= new Date();
console.log("current date is ", date);

// year,month(start from 0 as jan ), date,hours,minutes,seconds,milliseconds
var dateOnThatDay = new Date(2020,11,25,12,20);
document.write(dateOnThatDay);

//  Date objects methods:
var todaydate= new Date();
console.log("today's date",todaydate);

console.log("current date", todaydate.getDate());
console.log("current day", todaydate.getDay());
console.log("current Month", todaydate.getMonth());
console.log("current Hours", todaydate.getHours());
console.log("current Minutes", todaydate.getMinutes());
console.log("current milliseconds", todaydate.getMilliseconds());