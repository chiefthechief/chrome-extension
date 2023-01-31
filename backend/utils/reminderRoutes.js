const express = require("express")
const { getReminders, addReminder } = require("./reminderController.js")
const router = express.Router()

router.get("/", getReminders)
router.post("/", addReminder)

module.exports = router