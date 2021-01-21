//we can declare a String 2 types..
var iAmaString = "1st way to declare a String.";
var iAmaString2 = new String("2nd way to declare a String : your string.");
console.log(iAmaString, iAmaString2);

// String Methods....
var str;
str =
  "My name is lipsa padhy and i am learning javasript.i want to be a Angular developer!."; //this is how we can define a string...
/*
ALL METHODS:-
---length
var strLength = str.length;
console.log("the total legth of this string is : " + strLength);

---toLowerCase()
var lowerString = str.toLowerCase();
console.log("this method will convert all uppercase into lower case like M and A :" + lowerString);

---toUpperCase()
var upperCase = str.toUpperCase();
console.log("this method will convert all lowercase into uppercase :" + upperCase);

---includes()
var isAvailable = str.includes("z");
console.log("this method will check is the word/alphabate is available or not  : " + isAvailable); //boolean

---startsWith()
var isFromStart = str.startsWith("M");
console.log("it will check is the sentance is starting with alphabate/word or not : " + isFromStart); //boolean

---endsWith()
var isFromEnd = str.endsWith(".");
console.log("it will check is the sentance is ending with alphabate/word or not : " + isFromEnd); //boolean

---search()
var searchIndex = str.search("!");
console.log("it will search the index no. from the given string : " + searchIndex); //indexNumber

---match()
var matchCheak = str.match(/i/g);
console.log("it will match some value from the given string : " + matchCheak); //String

---indexOf(value)
var checkIndexOf = str.indexOf('lipsa');
console.log("it will find the index number of given word/latter from string : " + checkIndexOf); //indexNumber

---lastIndexOf(value)
var checkIndexOf = str.lastIndexOf("lipsa");
console.log(
  "it will find the index number of given word/latter from last : " +     //indexNumber
    checkIndexOf
);

---replace(whatToChange, withWhom)
var whatToChange = "Angular";
var withWhom = "front-end";
var result = str.replace(whatToChange, withWhom);
console.log("we can replace any latter/words from this like we chaged Angular in front-end : " + result);

---trim()
var userName = "   lipsa   ";
var trimValue = userName.trim();
console.log("it will remove all unwanted space from a string : " + trimValue);

---charAt(indexNum)
var latterIndex = 11;
var findLatter = str.charAt(latterIndex);
console.log("it will find the latter/word by index number : " + findLatter); // String

---charCodeAt(indexNum)
imp---> @-Z = 64-90, a-z = 97-112
var latterIndex = 11;
var findLatter = str.charCodeAt(latterIndex);
console.log("it will find the charcode by index number : " + findLatter); // charecter code number

---fromCharCode(indexNum)
imp---> it will not run on an string variable by default it will take datatype String
var value = String.fromCharCode()
console.log("it will find charcode of keybord values : " + value)

---concat()
var str1 = "let me concat with string.";
var finalStr = str.concat(str1);
console.log("we can merge 2 or more string elements. : " + finalStr)

---split()
var splitValue = str.split(" ");
console.log("we can brake a string according to aur requirment convert a string into an array : " + splitValue);

---repeat()
var repeatValue = "lipsa "
var resultValue = repeatValue.repeat(5);
console.log("it will repeat the given string : " + resultValue);

---slice()
var sliceValue = str.slice(51, 83)
console.log("it will break a string according to starting and ending Index : " + sliceValue)

---substr()
---substring()
var sliceValue = str.substring(51, 83)
console.log("it will break a string according to starting and ending Index : " + sliceValue);

---toString()
var toStringValue = new String('i am lipsa.');
console.log(toStringValue)
var result = toStringValue.toString()
console.log("it will convet any data type into String : " + result)

---valueOf()
var toStringValue = new String("i am lipsa.");
console.log(toStringValue);
var result = toStringValue.valueOf();
console.log("it will convet any data type into String : " + result);
*/
