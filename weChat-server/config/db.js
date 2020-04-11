var mongoose = require("mongoose")
var db = mongoose.createConnection("mongodb://localhost:27017/wechat", { useNewUrlParser: true, useUnifiedTopology: true })

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  // we're connected!
  console.info("链接成功")
})

module.exports = db
