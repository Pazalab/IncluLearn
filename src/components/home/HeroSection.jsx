import { Link } from "react-router-dom"
import video from "../../assets/hero-video.mp4"
import { RxArrowTopRight } from "react-icons/rx";
const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="hero-section-content">
                      <video muted autoPlay loop poster="/poster2.jpg">
                             <source src={video} type="video/mp4" />
                     </video>

                     <div className="hero-overlay"></div>

                        <div className="hero-texts">
                                   <div className="inner-row">
                                              <div className="hero-texts-content">
                                                         <h1>Empowering Every Learner, <br></br> Embracing Every Ability.</h1>

                                                         <div className="hero-text-action">
                                                                      {/* <p>We are a leading special education consultancy dedicated to empowering students with special needs through innovative strategies that drive optimal learning outcomes. Our expert-driven solutions ensure seamless integration, active participation, and lasting success in both the education system and society.</p> */}
                                                                      {/* <p>We are committed to creating a future where all learners in Rwanda and beyond, regardless of their unique educational needs, are empowered to achieve their fullest potential in an inclusive, supportive and enabling environment.</p> */}
                                                                      <p>We’re building a future where all learners in Africa and beyond can thrive—regardless of their needs—in inclusive, supportive, and enabling environments.</p>
                                                                      <Link to={"/what-we-do"}>Explore More <span><RxArrowTopRight /></span></Link>
                                                         </div>
                                              </div>
                                   </div>
                        </div>
              </div>
    </div>
  )
}

export default HeroSection