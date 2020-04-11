var dbmodel = require("../model/dbmodel")
var User = dbmodel.model("User")

exports.findUser = function (res) {
  User.find(function (err, val) {
    if (err) {
      console.log("查找失败" + err)
      res.send({
        code: 1,
        data: err,
        msg: "查询失败"
      })
    } else {
      res.send({
        code: 0,
        data: val,
        msg: "查询成功"
      })
    }
  })
}
