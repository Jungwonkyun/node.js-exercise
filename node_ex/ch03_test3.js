function add(a, b) {
  return a + b;
}

var result = add(10, 10);
console.log("result: " + result);

//js 에서는 변수에 함수를 할당하는 것이 가능하다
var add2 = function (a, b) {
  return a + b;
};

var result = add2(10, 10);
console.log("result: " + result);
