import ContactForm from './ContactForm'

const ContactBody = () => {
  return (
    <div className='contact-body'>
              <div className="inner-row">
                        <div className="contact-body-content">
                                      <div className="contact-body-texts">
                                                   <h2>Let's Work <br /> — Together</h2>
                                                   <p>We're here to support you! Reach out to us today, and we'll provide the answers and guidance you need.</p>

                                                   <div className="contact-box">
                                                              <h3>Email Us</h3>
                                                              <p>support@inclulearn.org</p>
                                                   </div>
                                                   <div className="contact-box">
                                                               <h3>Give us a Call</h3>
                                                               <p>+250 791 946 666</p>
                                                   </div>
                                                   <div className="contact-box">
                                                             <h3>Office Address</h3>
                                                             <p>Kibagabaga, Kigali, Rwanda</p>
                                                   </div>
                                      </div>
                                      <ContactForm />
                        </div>
              </div>
    </div>
  )
}

export default ContactBody