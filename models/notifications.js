var mongoose=require("mongoose");

var notificationsSchema = new mongoose.Schema({
  _id:String
  ,notifications:[Object]
});
var notifications = mongoose.model('notifications', notificationsSchema);

module.exports = notifications;