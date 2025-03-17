import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import BlogSection from "../components/home/BlogSection"
import HeroSection from "../components/home/HeroSection"
import Numbers from "../components/home/Numbers"
import PartnersSection from "../components/home/PartnersSection"
import ProcessSection from "../components/home/ProcessSection"
import ServicesSection from "../components/home/ServicesSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import "../css/home.css"
const Home = () => {
  return (
    <div>
           <div className="landing">
                   <Navbar />
                   <HeroSection />
           </div>
           <AboutSection />
           <ServicesSection />
           <ProcessSection  />
           <Numbers />
           <TestimonialsSection />
           <PartnersSection />
           <BlogSection />
           <CallToAction />
           <Footer />
    </div>
  )
}

export default Home