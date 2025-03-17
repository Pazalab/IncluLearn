import { Link } from "react-router-dom"
import { HiOutlineArrowUpRight } from "react-icons/hi2";
const CallToAction = () => {
  return (
    <div className="call-to-action">
                <div className="inner-row">
                            <div className="call-to-action-content">
                                      <div className="call-to-action-texts">
                                                 <h2>Let's Transform Education Together</h2>
                                                 <p>Looking for expert guidance in special education? Whether you need assessments, tailored learning plans, or teacher training, our team is here to support every learner's success.</p>
                                                 <Link to={"/"}>Get in Touch <span><HiOutlineArrowUpRight /></span></Link>
                                      </div>
                            </div>
                </div>
    </div>
  )
}

export default CallToAction