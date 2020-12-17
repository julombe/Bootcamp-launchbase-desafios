const fs = require("fs");

exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    // req.body.key == ""
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!");
    }
  }

  fs.writeFile("data.json", JSON.stringify(req.body), function (err) {
    if (err) return res.send("Write file error!");

    return res.redirect("/teachers");
  });

  //return res.send("req.body")
};
