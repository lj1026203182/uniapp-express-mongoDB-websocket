var dbserver = require("../dao/dbserver")
var emailServer = require("../dao/emailServer")

module.exports = function (app) {
  app.post("/test", (req, res) => dbserver.findUser(res))
  app.post("/email", (req, res) => {
    let mail = req.body.mail || null
    if (!mail) {
      res.send({
        code: 1,
        data: null,
        msg: "请输入用户名/邮箱"
      })
      return
    }
    emailServer.emailSignUp(mail, res)
  })
}
