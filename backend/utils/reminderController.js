const reminder = require("./reminderSchema.js")

const getReminders = async (req, res) => {
   const reminders = await reminder.find()
   res.status(200).json(reminders)
}
const addReminder = async (req, res) => {
   const { header, body } = req.body
   try {
      const newReminder = await reminder.create({ header, body })
      res.status(200).json(newReminder)
   } catch (err) {
      res.status(400).json({err: err.message})
   }
}

module.exports = {
   getReminders,
   addReminder,
}