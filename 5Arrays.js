//Array declaration ways..
var arrayMethod1 = [1, 2, 78, "lipsa", "padhy", true];
// console.log(arrayMethod1);

var arrayMethod2 = new Array(3);
arrayMethod2[0] = 1;
arrayMethod2[1] = "lipsa";
arrayMethod2[2] = "padhy";
arrayMethod2[3] = true;
// console.log(arrayMethod2)

var array1 = [1, 3, 78, 90.9, "lipsa", "padhy", true, false];
var array2 = ["mamun", "lipina", "papina", "niva", 45, 89.678, true, false];

//Array Methods..
/*
ALL METHODS
---reverse()
console.log(array1)
var reverseValue = array1.reverse()  //it will change the exesting Array
console.log(reverseValue)

---pop()
console.log(array1)
var popValue = array1.pop()         //it will change the exesting Array
console.log(popValue)
console.log("it will remove a value from last in an array : " + array1)  

---push()
array1.push("pushedStrung")         //it will change the exesting Array
console.log("it will add a value at last in an array : " + array1);

---shift()
var shiftValue = array1.shift()
console.log("it will remove 1st element from an array : " + shiftValue);
console.log(array1)

---unshift()
array1.unshift("iAddedInFirst")
console.log("it will add an element at first : " + array1);
console.log(array1)

---concat()
var concatArray = array1.concat(array2)
console.log("it will help to add 2 different array into 1 array : ")  
console.log(concatArray)                        //this will not modefy exesting array instad of that it will create new one.

---join()
var joinValue = array1.join(",");
console.log("it will convert an array into a string  : ")
console.log(joinValue)

---slice()
var sliceValue = array1.slice(1,3);
console.log( "it will remove array elements from middle of an array : " )
console.log(sliceValue)                         //this will not modefy exesting array instad of that it will create new one.

---splice()
var spliceValue = array1.splice(3, 1, 100);
console.log( "it will remove,add and modify array elements from middle of an array : " )
console.log(array1, spliceValue)                //it will modefy the exesting array.

---isArray()
console.log("it will check is the given data type is array or not : ")
console.log(Array.isArray(array1))

---indexOf()
var arrIndexofValue = array1.indexOf('lipsa')
console.log("this method will find the index number of an element in an array : ")
console.log(arrIndexofValue)

---lastIndexOf()
---entries()
var entriesValue = array1.entries(); // it will return a Object
// we have use this in a loop (for object we will use "for of" loop)
for(let i of entriesValue){
    console.log(i)
}
// console.log(entriesValue)

---find()
var found1 = array1.find((element) => element > 70);
console.log(found1);
var found2 = array1.find((element) => element == "lipsa");
console.log(found2);
console.log(
  "it will find the value with itteration and retuen the value : it will return single value."
);

---findIndex()
var found1 = array1.findIndex((element) => element > 70);
console.log(found1);
var found2 = array1.findIndex((element) => element == "lipsa");
console.log(found2);
console.log(
    "it will find the index number with itteration and retuen the index value : it will return single value."
);

---includes()
var includesValue1 = array1.includes("lipsa");
var includesValue2 = array1.includes("lisa");
var includesValue3 = array1.includes("psa");
console.log(includesValue1, includesValue2, includesValue3);
console.log(
  "it will find element from an array if it exist then it will return true or false"
);

---toString()
var toStringValue = array1.toString();
console.log(toStringValue);
console.log("it will convert a array into string value");

---valueOf()
const iterator = array1.values();
console.log(iterator);
console.log(
  "it will convert a array into Object! then we can perform the for of loop"
);
for (let value of iterator) {
  console.log(value);
}
array1.forEach((value) => {
  console.log(value);
});

---fill()
var array = [1, 2, 3, 4, 5, 6, 7, 8];
// fill(in which value you want to change, from starting index, to ending index)
console.log(array.fill(3, 6, 8));//(lastIndex -1)
console.log(array.fill(3, 2))
console.log(array.fill(3))


HOM ( Higher Order Method )
---sort()
var array = [10, 8, 3, 6, 0, 2, 66, 8, 4, 9, 1];
console.log(array);
console.log(array.sort());
array.sort(function (a, b) {
  return a - b;
});
console.log(array);
console.log("it will arrange array value by increasing order...");

---every()
var array = [10, 20, 30, 49, 59, 60, 78, 79, 99, 46, 38];
console.log(array);
var checkValue = array.every((element) => {
  return element < 100;
});
console.log(checkValue);
console.log(
  "it will iterate will all elements of an array and check the condition is satisfy or not and return true or false!"
);

---some()
var array = [10, 20, 30, 49, 59, 60, 78, 79, 99, 46, 38];
var fun = (element) => element % 2 === 0;
console.log(array.some(fun))

---filter()
var array = [];
for (let i = 0; i < 101; i++) {
  array.push(i);
}
var newArr = array.filter((value) => {
  return (value % 3 === 0)
});
console.log(newArr);

---forEach()
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//multiply all element by 5;
array.forEach((value, i)=>{
    console.log(i + " in this index we have this value : " +  value*5)
})

---map()
var array = [];
for (let i = 0; i < 101; i++) {
  array.push(i);
}
var newArr = array
  .map((value) => {
    if (value % 3 === 0) {
      return value;
    }
  })
  .filter((element) => {
    if (element != undefined) {
      return element;
    }
  });
console.log(newArr);

---reduce()
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//array.reduce(accumulator, currentValue, currentIndex, array)
var reduceValue = array.reduce((accumulator, currentValue) => {
  return (accumulator + currentValue);
}, 0);
console.log(reduceValue)

*/


