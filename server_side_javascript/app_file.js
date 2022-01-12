const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set("views", "./views_file");
app.set("view engine", "jade");

app.get("/topic/new", function (req, res) {
  fs.readdir("data", function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Error");
    }
    res.render("new", { topics: files });
  });
});

app.get(["/topic", "/topic/:id"], function (req, res) {
  fs.readdir("data", function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Error");
    }

    var id = req.params.id;
    //id 값이 있을 떄
    if (id) {
      fs.readFile("data/" + id, "utf8", function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Error");
        }
        res.render("view", { topics: files, title: id, description: data });
      });
    }
    //id 값이 없을 때
    else {
      res.render("view", {
        topics: files,
        title: "welcome",
        description: "Hello, Javascript for server",
      });
    }
  });
});

/*app.get("/topic/:id", function (req, res) {
  var id = req.params.id;
  fs.readdir("data", function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Error");
    }
    fs.readFile("data/" + id, "utf8", function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Error");
      }
      res.render("view", {topics:files, title: id, description: data });
    });
  });
});*/

app.post("/topic", function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile("data/" + title, description, function (err) {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
    res.redirect('/topic/'+ title);
  });
});
//connect to port
app.listen(3000, function () {
  //3000 이라는 port listen을 성공하면 익명함수 function을 call back하여 실행해준다
  console.log("Connected, 3000 port");
});
