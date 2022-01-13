var users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 22 },
  { name: "티아라", age: 21 },
];

//C style for 문은 성능적으로 좋지 않음
for (var i = 0; i < users.length; i++) {
  console.log("배열원소 #" + i + " : " + users[i].name);
}

//js에서는 forEach 문을 사용하는 경우가 많다.
users.forEach(function (elem, index) {
  console.log("배열 원소 #" + index + ": " + elem.name);
});
