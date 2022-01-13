//callback function 따로 리턴값이 없이 바로 callback 함수로 parameter전달
function add(a, b, callback) {
  var result = a + b;
  callback(result);

  var history = function () {
    return a + " + " + b + " = " + result;
  };

  return history;
}

//callback함수를 사용하는 함수 객체를 add_history에 저장
var add_history = add(20, 20, function (result) {
  console.log("더하기 결과 : " + result);
});

console.log("add_history의 자료형 : " + typeof add_history);
console.log("결과값으로 받은 함수 실행 : " + add_history());
