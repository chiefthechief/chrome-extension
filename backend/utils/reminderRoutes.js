const express = require("express")
const reminderModel = require("./reminderSchema.js")
const router = express.Router()

router.get("/", (req, res) => {
   res.send("this is the homepage")
})
router.post("/", (req, res) => {
   res.send("you have posted on this page")
})

module.exports = router