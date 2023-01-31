const Reminder = ({header, body}) => {
   return (
      <section className="reminder">
         <h2>{header}</h2>
         <p>{body}</p>
      </section>
   )
}

export default Reminder