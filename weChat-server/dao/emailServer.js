const nodemailer = require("nodemailer")
const credentials = require("../config/credentials")

const Transport = nodemailer.createTransport({
  service: "qq",
  auth: {
    user: credentials.qq.user,
    pass: credentials.qq.pass
  }
})

exports.emailSignUp = function (email, res) {
  const options = {
    from: "1026203182@qq.com",
    to: email, // list of receivers
    subject: "感谢注册", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?11</b><br/><a href='https://www.baidu.com' >点击查看</a>" // html body
  }

  Transport.sendMail(options, function (err, msg) {
    if (err) {
      res.send({
        code: 1,
        data: err,
        msg: "发送失败"
      })
      console.log(err)
    } else {
      res.send({
        code: 0,
        data: "",
        msg: "发送成功"
      })
    }
  })
}
