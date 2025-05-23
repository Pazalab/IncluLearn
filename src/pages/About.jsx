import AboutContent from "../components/about/AboutContent"
import AboutHero from "../components/about/AboutHero"
import ValuesSection from "../components/about/ValuesSection"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import Numbers from "../components/home/Numbers"
import PartnersSection from "../components/home/PartnersSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import "../css/about.css"
const About = () => {
  return (
    <div>
            <div className="about-page-landing">
                      <Navbar />
                      <AboutHero />
            </div>
            <AboutContent />
            <ValuesSection />
            <Numbers />
            {/* <TestimonialsSection /> */}
            {/* <PartnersSection /> */}
            <CallToAction />
            <Footer />
    </div>
  )
}

export default About