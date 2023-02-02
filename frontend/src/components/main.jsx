import { useState, useEffect } from "react"
import Reminder from "./reminder.jsx"

const Main = () => {
   const [reminder, setReminder] = useState("")
   useEffect(() => { 
      const getReminders = async () => {
         const response = await fetch("http://localhost:3000")
         const data = await response.json()
         let randInt = Math.floor(Math.random() * data.length)
         setReminder(data[randInt])
      }
      getReminders()
   }, [setReminder])
   return (
      <main>
         <Reminder
            key={reminder._id}
            reminder={reminder}
         />
      </main>
   )
}

export default Main