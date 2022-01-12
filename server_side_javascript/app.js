const ex = require("express");
const app = ex();
const bodyParser = require("body-parser");

app.locals.pretty = true;

app.set("view engine", "jade"); //사용할 템플리트 엔진
app.set("views", "./views"); //jade에서 템플릿 파일은 views라는 디렉토리 안에 보관한다.
app.use(ex.static("public")); //public 안에 있는 정적인 파일 txt img html file 등등을 서비스 할 떄 사용
app.use(bodyParser.urlencoded({ extended: false })); //post방식으로 들어오는 사용자가 전송한 데이터를 가장 먼저 받는다.

app.get("/form", function (req, res) {
  res.render("form");
});

app.get("/form_receiver", function (req, res) {
  var title = req.query.title;
  var description = req.query.description;
  res.send(title + "," + description);
});

//get과 다르게 query가 아니라 body를 사용한다. but req 안에는 body가 없는데 <express가 기본적으로 제공x>  body parser를 통해서 body를 만들어 줘야한다.
//query string으로 url을 통해서 보내는건 한계가 존재한다 -> 정해진 규격(너무 길면 잘린다) + 보안상 노출 등등
app.post("/form_receiver", function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title + "," + description);
});

app.get("/topic/:id", function (req, res) {
  var topics = ["Javascript is....", "Nodejs is...", "Express is..."];
  //res.send(topics[req.query.id]);//?id=0,1,2을 치면 해당하는 리스트 인덱스 문자를 보여준다.

  var output = `
    <a href = "/topic/0">JavaScript</a><br>
    <a href = "/topic/1">Nodejs</a><br>
    <a href = "/topic/2">Express</a><br><br>
    ${topics[req.params.id]} 
    `;
  //req.params.id와 app.get("/topic/:id", function (req, res)가 매칭
  res.send(output);

  //사용자가 id=1 이런식으로 치거나 클릭해서 오는 건 request에 해당한다.
  res.send(req.query.id); //?id=0,1,2를 받아서 처리 만약 id가 아니라 다른 값이 오면 실행 x
  //res.send(req.query.id + "," + req.query.name); 복수의 parameter를 받고 싶을 때
});

app.get("/topic/:id/:mode", function (req, res) {
  res.send(req.params.id + "," + req.params.mode);
});

app.get("/template", function (req, res) {
  res.render("temp", { time: Date(), _title: "Jade" }); //temp라는 템플릿 파일을 랜더링해서 보여준다.
  //temp.jade의 time이라는 변수에 Date()함수를 적용
});

app.get("/", function (req, res) {
  res.send("Hello home page");
});

//example of static expression  정적인 파일은 안의 파일만 수정하고 reload하면 자동으로 바뀜
app.get("/logo", function (req, res) {
  res.send('Hello logo!, <img src = "/logo.png">');
});

//동적인 파일은 실행중인 node를 재실행 시켜줘야한다 but 프로그래밍 적으로 웹페이지를 구현하면 동일한 반복 실행이나
//loop등을 이용할 수 있으므로 더 편할 때가 있다.

app.get("/dynamic", function (req, res) {
  var lis = " ";
  for (var i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }

  var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="uft-8">
            <title></title>         
        </head>
        <body>
            Hello Dynamic!
            ${lis} 
        </body>
    </html>`;

  //${lis}로 변수를 전달해준다.

  res.send(output);
});

app.get("/login", function (req, res) {
  res.send("<h1>Login please<h1>");
});

app.listen(3000, function () {
  console.log("Connected 3000 port!");
});
