
const ContactForm = () => {
  return (
    <div className="contact-form">
               <h2>Connect with IncluLearn</h2>
               <p>Complete the form below to send us a message, and we'll get back to you as soon as possible!</p>

               <form>
                          <div className="form-row split">
                                   <div className="form-column">
                                             <label htmlFor="name">Full Name <span>*</span></label>
                                             <input type="text" className="form-control" placeholder="Jane Doe" />
                                   </div>
                                   <div className="form-column">
                                             <label htmlFor="email">Email <span>*</span></label>
                                             <input type="email" className="form-control" placeholder="Jane Doe" />
                                   </div>
                          </div>
                          <div className="form-row split">
                                   <div className="form-column">
                                             <label htmlFor="phone">Phone Number <span>*</span></label>
                                             <input type="text" className="form-control" placeholder="+250 1234 56789" />
                                   </div>
                                   <div className="form-column">
                                             <label htmlFor="subject">Subject <span>*</span></label>
                                             <input type="subject" className="form-control" placeholder="Add a subject" />
                                   </div>
                          </div>
                          <div className="form-row">
                                     <label htmlFor="message">Write Message <span>*</span></label>
                                     <textarea name="" placeholder="Tell us more about"></textarea>
                          </div>
                          <div className="form-btn">
                                    <button type="submit">Send Message</button>
                          </div>
               </form>
    </div>
  )
}

export default ContactForm