var users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 22 },
  { name: "티아라", age: 21 },
];

delete users[1]; //얘는 눈에 보이는 값만 삭제하지 완벽한 메모리 제거가 되지 않는다 <얘를 잘 안 씀>

console.dir(users);

users.forEach(function (elem, index) {
  console.log("element #" + index);
  console.dir(elem);
});

//추가하고 싶을 때 1번째 추가할 위치 & 2번째 param = 0
users.splice(1, 0, { name: "애프터스쿨", age: 24 });
console.dir(users);

//삭제하고 싶을 때 1번쨰 삭제를 시작할 위치 & 2번째 param 얼마나 삭제할 것인지
users.splice(2, 1);
console.dir(users);
