import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ResourcesBody from "../components/resources/ResourcesBody"
import ResourcesHero from "../components/resources/ResourcesHero"
import "../css/resources.css"

const Resources = () => {
  return (
    <div>
             <div className="resources-page-landing">
                      <Navbar />
                      <ResourcesHero />
             </div>
             <ResourcesBody />
             <CallToAction />
             <Footer />
    </div>
  )
}

export default Resources