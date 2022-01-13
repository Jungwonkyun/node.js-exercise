var path = require("path");

var directories = ["Users", "Mars", "docs"];
var dirstr = directories.join();
console.log("dir : ", dirstr);

var dirstr2 = directories.join(path.sep);
console.log("dir2 : ", dirstr2);

//file path를 만들 때 사용, 얘가 제일 많이 쓰인다.
var filepath = path.join("/Users/Mars", "notepad.exe");
console.log("filepath : ", filepath);

var dirname = path.dirname(filepath);
console.log("dirname : ", dirname);

var basename = path.basename(filepath);
console.log("basename : ", basename);

var extname = path.extname(filepath);
console.log("extname : ", extname);
