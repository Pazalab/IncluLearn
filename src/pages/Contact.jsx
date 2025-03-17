import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contact/ContactBody"
import ContactHero from "../components/contact/ContactHero"
import "../css/contact.css"
const Contact = () => {
  return (
    <div>
              <div className="contact-page-landing">
                          <Navbar />
                          <ContactHero />
              </div>
              <ContactBody />
              <Footer />
    </div>
  )
}

export default Contact