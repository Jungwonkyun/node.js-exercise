var url = require("url");

var urlstr =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcorn";

var curUrl = url.parse(urlstr);
console.dir(curUrl);

console.log("query -> " + curUrl.query);

var curstr = url.format(curUrl);
console.log("url -> " + curstr);

var querystring = require("querystring");
var params = querystring.parse(curUrl.query);

console.log("검색어: " + params.query);
