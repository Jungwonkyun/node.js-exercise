var users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 22 },
];

console.log("시용자수 : " + users.length);

users.push({ name: "티아라", age: 20 });

console.log("시용자수 : " + users.length);

var elem = users.pop();
console.log("시용자수 : " + users.length);

console.log("pop으로 꺼낸 세번쨰 원소 : ");
console.dir(elem);
