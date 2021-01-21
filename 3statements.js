// if statment-----
/*
if (5 > 3) {
  console.log("5 is greater then 3");
}
if (typeof "lipsa" == String) {
  console.log("given value is string.");
}
*/

// if-else statment-------
/*
var number = 12;
if (number < 30 && number > 0) {
  console.log("given number is possitive and less then 30.");
} else {
  console.log("given number is eighter -ve or greater then 30.");
}

if (!number > 12) {
  console.log("this is less then 12!");
} else {
  console.log("this is equal or greater then 12!");
}
*/

// if-else-if statment-------
/*
<----MARK CALCULATION---->
var yourPercentage = 40;
if (yourPercentage >= 30 && yourPercentage < 40) {
  console.log(
    "jadi mark greterthen equalto 30 au lessthen 40 ditajaka condition heuthiba then your mark " +
      yourPercentage +
      "%." +
      "...just pass"
  );
} else if (yourPercentage >= 40 && yourPercentage < 50) {
  console.log(
    "jadi mark greterthen equalto 40 au lessthen 50 ditajaka condition heuthiba then your mark " +
      yourPercentage +
      "%." +
      "...3rd"
  );
} else if (yourPercentage >= 50 && yourPercentage < 60) {
  console.log(
    "jadi mark greterthen equalto 50 au lessthen 60 ditajaka condition heuthiba then your mark " +
      yourPercentage +
      "%." +
      "...2nd"
  );
} else if (yourPercentage >= 60 && yourPercentage <= 100) {
  console.log(
    "jadi mark greterthen equalto 60 au lessthen 100 ditajaka condition heuthiba then your mark  " +
      yourPercentage +
      "%." +
      "...1st"
  );
} else {
  console.log(
    "ayita ku ame sabu bele by default rakhu " +
      yourPercentage +
      "%." +
      "...fail"
  );
}
*/

// Break & continue statment
/*
basically we can use this statment inside a loop to break or continue conditions..
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("hey i am break : " + i);
    break;
  }
  console.log("i am the value of : " + i);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("hey i am continue : " + i);
    continue;
  }
  console.log("i am the value of : " + i);
}
*/

// Switch case
/*
<----GRADE CALCULATION---->
var fruit = "xyz";
switch (fruit) {
  case "apple":
    console.log("this is apple but because your value is " + fruit);
    break;
  case "mango":
    console.log("this is mango but because your value is " + fruit);
    break;
  case "grape":
  case "banana":
    console.log("this is grape & banana but because your value is " + fruit);
    break;
  default:
    console.log("please enter apple, mango, grape or banana.");
}
*/

//<----------we will do more examples on loops sections------------->
