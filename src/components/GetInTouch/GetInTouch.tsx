import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <section className='get-in-touch' id='contact'>
      <div className="touch-container">
        <div className="col-4">
          <p>Drop me a line.I would like to hear from you.</p>
        </div>
        <div className="col-6">
          <h2>Get in Touch</h2>
          <form action="#">
            <input type="text" name='name' placeholder='Name' />
            <input type="email" name="email" placeholder='Email' />
            <textarea name="message" placeholder='Message'></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch