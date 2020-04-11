var db = require("../config/db")
var mongoose = require("mongoose")

var Schema = mongoose.Schema

// 用户表
var UserSchema = new Schema({
  name: { type: String },
  psw: { type: String },
  email: { type: String },
  gender: { type: Number, default: 1 }, // 1 男
  birth: { type: Date },
  phone: { type: Number },
  registerTime: { type: Date },
  des: { type: String },
  imgUrl: { type: String }
})

// 好友表
var FriendSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  friendID: { type: Schema.Types.ObjectId, ref: "User" },
  state: { type: Number }, // 0 已为好友 1 不是好友  2 已申请 ,未同意
  time: { type: Date }
})

// 一对一消息表
var FriendMsgSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  friendID: { type: Schema.Types.ObjectId, ref: "User" },
  message: { type: String },
  type: { type: Number }, // 0 文字 1 图片  2 其余...
  time: { type: Date }, // 发送时间
  state: { type: Number } // 0 已读 1 未读
})

// 群表
var GroupInfoSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  namne: { type: String },
  imgUrl: { type: String }, // 群封面
  time: { type: Date }, //建立时间
  notice: { type: String }
})

// 群成员表
var GroupMemberSchema = new Schema({
  groupID: { type: Schema.Types.ObjectId, ref: "Group" },
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String },
  time: { type: Date }, //加入时间
  unread: { type: Number }, // 未读消息数
  shield: { type: Number } // 0 不屏蔽 1 屏蔽
})

// 群成员表
var GroupMsgSchema = new Schema({
  groupID: { type: Schema.Types.ObjectId, ref: "Group" },
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  message: { type: String },
  type: { type: Number }, // 0 文字 1 图片  2 其余...
  time: { type: Date },
})

module.exports = db.model("User", UserSchema)
module.exports = db.model("Friend", FriendSchema)
module.exports = db.model("FriendMsg", FriendMsgSchema)
module.exports = db.model("GroupInfo", GroupInfoSchema)
module.exports = db.model("GroupMember", GroupMemberSchema)
module.exports = db.model("GroupMsg", GroupMsgSchema)

