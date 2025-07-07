var mongoose = require('mongoose')
const { Schema } = mongoose;

const admin = new Schema({
    admin_name: String,
    admin_mobile: String,
    admin_email: String,
    admin_password: Number,
});
var admin_info = mongoose.model("Admin", admin)
module.exports = admin_info;