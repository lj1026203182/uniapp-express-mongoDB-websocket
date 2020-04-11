const express = require("express")
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type")
  res.header("Access-Control-Allow-Methods", "*")
  if (req.method == "OPTIONS") {
    res.sendStatus(200)
  } else {
    next()
  }
})

// 解析数据
app.use(bodyParser.json())

require("./router/index")(app)

// 404
app.use((req, res, next) => {
  let err = new Error("404 Not Found")
  err.status = 404
  next(err)
})

// 错误处理
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
