//JS Object
var user= {
    name:'satya',
    age:24,
    favfood:'misal pav',
    phone: '752431895'
};

// JS object convert to Json object
var myJson=JSON.stringify(user)
console.log('the JSON datatype', typeof myJson);
console.log('the json data is',myJson);

//JSON convert into JS object
var myObject=JSON.parse(myJson)
console.log('the JS object datatype', typeof myObject);
console.log('the js object data is',myObject);

