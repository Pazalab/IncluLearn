import { Link } from "react-router-dom"
import logo from "../../assets/logo2.png"
import { IoMdCall } from "react-icons/io";
import { BsEnvelope, BsPinMap } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { BiLogoLinkedin } from "react-icons/bi";
const Footer = () => {
  return (
    <footer>
             <div className="inner-row">
                      <div className="footer-content">
                                  <div className="footer-column">
                                               <Link to={"/"} className="logo">
                                                          <img src={logo} alt="" />
                                               </Link>
                                               <p>We address the entire spectrum of special education needs, from mental health and cognitive disorders to behavioral challenges.</p>
                                  </div>
                                  <div className="footer-column">
                                             <div className="top-part">
                                                       <ul>
                                                                <li><Link to={"/about-us"}>About Us</Link></li>
                                                                <li><Link to={"/what-we-do/specialized-education-diagnostic-assessments"}>What We Do</Link></li>
                                                                <li><Link to={"/resources"}>Resources</Link></li>
                                                       </ul>
                                             </div>
                                             <div className="bottom-part">
                                                         <div className="single-column">
                                                                <p><span><IoMdCall /></span>+250 791 946 666</p>
                                                                <p><span><BsEnvelope /></span>support@inclulearn.org</p>
                                                                <p><span><BsPinMap /></span>Kibagabaga, Kigali, Rwanda</p>
                                                         </div>
                                                         <div className="single-column">
                                                                  <div className="social-links">
                                                                           {/* <h4>Let's connect</h4> */}
                                                                           <ul>
                                                                                  <li><Link to={"/"}><span><GrFacebookOption /></span></Link></li>
                                                                                  <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                                  <li><Link to={"/"}><span><RxInstagramLogo /></span></Link></li>
                                                                                   <li><Link to={"/"}><span><BiLogoLinkedin /></span></Link></li>
                                                                          </ul>
                                                                   </div>
                                                         </div>
                                             </div>
                                  </div>
                      </div>

                      <div className="copyright">
                                <p>All rights reserved &copy; { new Date().getFullYear()} IncluLearn Inc&trade;</p>
                                <div className="copyright-flexed">
                                           <p>Privacy</p>
                                           <span>|</span>
                                           <p>Terms of Use</p>
                                </div>
                      </div>
             </div>
    </footer>
  )
}

export default Footer