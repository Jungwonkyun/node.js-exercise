var users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 22 },
];

console.log("시용자수 : " + users.length);

users.unshift({ name: "티아라", age: 20 }); //배열의 맨 앞에 집어넣음

console.dir(users);
console.log("시용자수 : " + users.length);

var elem = users.shift(); //배열의 맨 앞을 끄집어냄
console.log("시용자수 : " + users.length);

console.log("pop으로 꺼낸 첫번쨰 원소 : ");
console.dir(elem);
