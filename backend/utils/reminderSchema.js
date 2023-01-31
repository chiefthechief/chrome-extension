const mongoose = require("mongoose")

const reminderSchema = mongoose.Schema({
   header: {
      type: String,
      required: true
   },
   body: {
      type: String,
      required: true,
   }
})

const reminderModel = mongoose.model("reminder", reminderSchema)
module.exports = reminderModel