import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ServicesBody from "../components/services/ServicesBody"
import ServicesHero from "../components/services/ServicesHero"
import "../css/services.css"

const Services = () => {
  return (
    <div>
             <div className="services-page-landing">
                        <Navbar />
                        <ServicesHero />
             </div>
             <ServicesBody />
             <CallToAction />
             <Footer />
    </div>
  )
}

export default Services