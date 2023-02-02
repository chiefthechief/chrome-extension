const Reminder = ({ reminder }) => {
   return (
      <section className="reminder">
         <h2>{reminder.header}</h2>
         <p>{reminder.body}</p>
      </section>
   )
}

export default Reminder