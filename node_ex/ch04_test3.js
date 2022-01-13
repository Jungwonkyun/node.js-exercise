//event를 tick으로 받는다
process.on("tick", function (count) {
  console.log("tick 이벤트 발생함: " + count);
});

setTimeout(function () {
  console.log("2초 후에 실행되었음.");

  process.emit("tick", "2"); //event를 emit으로 보내고
}, 2000);
