document.write("JS localStorage and sessionStorage Guide!!!");
/* <--------------------------------------------LOCAL STORAGE--------------------------------> */
// SET key-value pair items in local storage
localStorage.setItem("Name", "harry");
// GET items from local storage or RETRIVE Item
let bhru = localStorage.getItem("Name");
console.log(bhru);
// REMOVE items from local storage
localStorage.clear(); //---to clear all local storage data
localStorage.removeItem("name"); //---to clear perticural key value pairs
/*
LIMITATIONS
i) we can not store array in this. To avoied this we have to convert array into JSON for that we have to use 
{{ localStorage.setItem('arr1', JSON.stringify(myArr)) }} and to Retrive this data we have to use .parse 
{{ let arr = JSON.parse(localStorage.getItem('arr1')) }}

JSON.stringify() ---- it will take an object as an arrgument and return a string
JSON.parse() --- it will take a string as an arrgument and return an object.
*/
/* <--------------------------------------------SESSION STORAGE--------------------------------> */
// SET key-value pair items in local storage
sessionStorage.setItem("firstName", "Swadhin");
sessionStorage.setItem("lastName", "Panigrahi");
var array = ["jyoti", "saurav", "swadhin"];
sessionStorage.setItem("array", JSON.stringify(array)); //we are storing an array
// GET items from local storage or RETRIVE Item
let result = sessionStorage.getItem("firstName");
console.log(result);
let arrayTest = JSON.parse(sessionStorage.getItem("array"));
console.log(arrayTest);
// REMOVE items from local storage
sessionStorage.clear(); //---to clear all local storage data
sessionStorage.removeItem("name"); //---to clear perticural key value pairs
/*
-->local storage vs session storage?
After close or restart your browser the sessionStorage will clear all the data automatically but in 
localStorage it will not clear automatically.
*/