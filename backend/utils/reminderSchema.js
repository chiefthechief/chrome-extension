const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reminderSchema = new Schema({
   header: {
      type: String,
      required: false
   },
   body: {
      type: String,
      required: true,
   }
}, { timestamps: true })

module.exports = mongoose.model("reminder", reminderSchema)