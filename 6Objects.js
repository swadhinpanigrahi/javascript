var log = console.log;
//Object Declaration
var obj = {
  fsName: "lipsa",
  lsName: "padhy",
  age: 24,
};
obj["fsName"] = "mamun"; // obj.fsName = "mamun"
// log(obj["fsName"]);   // log(obj.fsName)

var obj2 = new Object();
obj2["fsName"] = "lipsa";
obj2["lsName"] = "purahit";
obj2["age"] = 24;
// log(obj2);

function obj3(fsName, lsName, age, gender, intrest) {
  this.name = {
    first: fsName,
    last: lsName,
  };
  this.age = age;
  this.gender = gender;
  this.intrest = intrest;
}
// var object = new + function()
var newObj3 = new obj3("lipsa", "padhy", 24, "female", ["dancing", "cooking"]);
// log(newObj3)

function obj4(fsName, lsName) {
  this.fsName = fsName;
  this.lsName = lsName;
  this.name = function () {
    fsName + lsName;
  };
}
var newObj4 = new obj4("lipsa", "padhy");

// class, constructor, prototype, super
//step-1
class person {
  constructor() {
    this.name = "lipsa";
  }
}
var person1 = new person();
// log(person1["name"]);
//step-2
class group {
  constructor(fsName, lsName, age) {
    this.fsName = fsName;
    this.lsName = lsName;
    this.age = age;
  }
}
var stud1 = new group("lipsa", "padhy", 24);
var stud2 = new group("sarla", "panda", 25);
console.log(stud1, stud2);

class groupExtends extends group {
  constructor(fsName, lsName, age, gender) {
    super(fsName, lsName, age);
    this.gender = gender;
  }
}

var stud3 = new groupExtends("Nisha", "Panigrahi", 24, "Female");
var stud4 = new groupExtends("Asha", "xyz", 25, "Female");
console.log(stud3, stud4);
