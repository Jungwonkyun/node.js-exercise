console.log("Hello world");
console.log("this is number %d", 10);

var person = {
  name: "소녀시대",
  age: 20,
};

console.log("자바스크립트 객체입니다. %j", person);

//console.dir 하면 js 객체 그대로 보여준다.
console.dir(person);

console.time("duration time");

var result = 0;
for (var i = 0; i < 1000; i++) {
  result += i;
}

console.timeEnd("duration time");
console.log("파일이름 : %s, __filename");
console.log("패스 : %s, __dirname");
