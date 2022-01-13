var users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 22 },
  { name: "티아라", age: 21 },
];

var users2 = users.slice(1, 2); //ㅑindex 번호 [1,2) 출력 2번쨰 인덱스 원소는 출력되지 않는다.

console.log("users 객체");
console.dir(users);

console.log("users2 객체");
console.dir(users2);
