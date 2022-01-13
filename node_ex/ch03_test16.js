var person1 = { name: "소녀시대", age: 20 };
var person2 = { name: "걸스데이", age: 21 };

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//person 이라는 객체에 walk라는 함수를 추가한다.
Person.prototype.walk = function (speed) {
  console.log(speed + "km로 걸어갑니다");
};

var person3 = new Person("소녀시대", 20);
var person4 = new Person("걸스데이", 22);

person3.walk(10);
console.dir(person3);
