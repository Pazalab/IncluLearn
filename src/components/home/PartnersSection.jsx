import logo1 from "../../assets/rise.png"
import logo2 from "../../assets/delaware.png"
import logo3 from "../../assets/snowflake.png"
import logo4 from "../../assets/trace.png"
import logo5 from "../../assets/vancouver.png"
import logo6 from "../../assets/springfield.png"

const PartnersSection = () => {
  return (
    <div className="partners-section">
               <div className="inner-row">
                         <div className="partners-content">
                                   <h3>Brands & Partners who Trust our Work</h3>

                                    <div className="partner-logos">
                                                <img src={logo1} alt="" />
                                                <img src={logo2} alt="" />
                                                <img src={logo3} alt="" />
                                                <img src={logo4} alt="" />
                                                <img src={logo5} alt="" />
                                                <img src={logo6} alt="" />
                                    </div>
                         </div>
               </div>
    </div>
  )
}

export default PartnersSection