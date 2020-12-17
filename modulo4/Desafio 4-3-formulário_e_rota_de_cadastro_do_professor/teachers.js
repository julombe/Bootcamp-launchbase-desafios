const fs = require("fs");
const data = require("./data.json") //pega os dados do data.json

exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    // req.body.key == ""
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!");
    }
  }


  data.teachers.push(req.body)

  fs.writeFile("data.json", JSON.stringify(data), function (err) {
    if (err) return res.send("Write file error!");

    return res.redirect("/teachers");
  });

  //return res.send("req.body")
};
