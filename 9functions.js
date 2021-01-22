//function
function sum(a, b, c) {
  console.log(a + b + c);
}
sum(5, 7, 8);

//Anonumus function
var sum1 = function (a, b, c) {
  console.log(a + b + c);
};
sum1(10, 20, 30);

//Arrow/fat-arrow function
var sum3 = (a, b, c) => {
  console.log(a + b + c);
};
sum1(20, 30, 50);

//function with return statement
//(we can't return multiple values from a function if we want to do then we have to return an Array or Object....)
var ex1 = (a, b, c) => {
  return a + b + c;
};
console.log(ex1(10, 50, 70));

var ex2 = (fsName, lsName, age, gender) => {
  var object = {
    fsName,
    lsName,
    age,
    gender,
  };
  return object;
};
console.log(ex2("fsName", "lsName", "age", "gender"));

//find char sum value of your name..
var ex3 = (name) => {
  var totalSum = 0;
  for (let i = 0; i < name.length; i++) {
    var val = name.charCodeAt(i);
    totalSum += val;
  }
  return name + totalSum;
};
console.log(ex3("Swadhin"));

//find your oposite name..
var ex4 = (name) => {
  //step1
  var arr = name.split("");
  var reverseArr = arr.reverse();
  var str = reverseArr.join("")
  return str;
};
console.log(ex4('lipsa padhy'))
