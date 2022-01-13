var calc = {};

calc.add = function (a, b) {
  return a + b;
};

console.log("module로 분리하기 전 - calc.add: " + calc.add(10, 10));
