//callback function 따로 리턴값이 없이 바로 callback 함수로 parameter전달
function add(a, b, callback) {
  var result = a + b;
  callback(result);
}

//변수에 따로 저장하지 않고 위에있는 callback을 통해서 바로 전달 (익명함수 이용)
add(10, 10, function (result) {
  console.log("더하기 결과(콜백함수 안에서) : " + result);
});
