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
---findIndex()
---includes()
---toString()
---valueOf()
---fill()


HOM ( Higher Order Method )
---sort()
---every()
---filter()
---some()
---forEach()
*/
