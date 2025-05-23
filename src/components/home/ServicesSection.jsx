import { Link, useNavigate } from "react-router-dom"
import { LuMoveDownRight, LuMoveUpRight } from "react-icons/lu";
import special from "../../assets/assessment.jpg"
import training from "../../assets/training.jpg"
import coaching from "../../assets/coaching.jpg"
import iep from "../../assets/iep.jpg"
import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
    const [ active, setActive ] = useState(0)
    const flexedRef = useRef();
    const navigate = useNavigate();

    useEffect(()=> {
              flexedRef.current.querySelectorAll(".flex-container").forEach((item, index) => {
                     item.addEventListener("mouseover", () => {
                               setActive(index)
                     })
              })
    }, [])
  return (
    <div className="services-section">
                <div className="inner-row">
                            <div className="services-section-content">
                                       <div className="services-column">
                                                 <h3>What We Do<span>.</span></h3>

                                                 <div className="intro-texts">
                                                            <p>At IncluLearn, we provide a full range of services to support students with special needs, equip educators, and enhance inclusive education. Whether you're a parent, teacher, school, or organization, we offer the tools and strategies to help every learner reach their full potential.</p>
                                                            <Link to={"/what-we-do/specialized-education-diagnostic-assessments"}>Explore all Services <span><LuMoveUpRight /></span></Link>
                                                 </div>
                                       </div>
                                       <div ref={flexedRef} className="services-column-flexed">
                                                 <div className={ active === 0 ? "flex-container active" : "flex-container"} onClick={() => navigate("/what-we-do/specialized-education-diagnostic-assessments")}>
                                                             <span className="top"><LuMoveDownRight/></span>
                                                             <img src={special} alt="" />

                                                             <div className="opened-texts">
                                                                        <div className="column">
                                                                                   <h2>01</h2>
                                                                                   <p>Specialized Education Diagnostic Assessments</p>
                                                                        </div>
                                                                        <span><LuMoveUpRight /></span>
                                                             </div>
                                                             <div className="inverted-texts">
                                                                     <h3>01</h3>
                                                                      <h2>Specialized Education Diagnostic Assessments</h2>
                                                          </div>
                                                 </div>
                                                 <div className={ active === 1 ? "flex-container active" : "flex-container"} onClick={() => navigate("/what-we-do/teacher-training-and-professional-development")}>
                                                          <span className="top"><LuMoveDownRight/></span>

                                                           <img src={training} alt="" />

                                                             <div className="opened-texts">
                                                                        <div className="column">
                                                                                   <h2>02</h2>
                                                                                   <p>Teacher Training & Professional Development</p>
                                                                        </div>
                                                                        <span><LuMoveUpRight /></span>
                                                             </div>
                                                          <div className="inverted-texts">
                                                                     <h3>02</h3>
                                                                      <h2>Teacher Training & Professional Development</h2>
                                                          </div>
                                                 </div>
                                                 <div  className={ active === 2 ? "flex-container active" : "flex-container"} onClick={() => navigate("/what-we-do/individual-education-program-and-accomodation-plan-development")}>
                                                         <span className="top"><LuMoveDownRight/></span>

                                                            <img src={iep} alt="" />

                                                             <div className="opened-texts">
                                                                        <div className="column">
                                                                                   <h2>03</h2>
                                                                                   <p>Individualized Education Program and Accomodation Plan Development</p>
                                                                        </div>
                                                                        <span><LuMoveUpRight /></span>
                                                             </div>
                                                          <div className="inverted-texts">
                                                                     <h3>03</h3>
                                                                      <h2>Individualized Education Program and Accomodation Plan Development</h2>
                                                          </div>
                                                 </div>
                                                 <div className={ active === 3 ? "flex-container active" : "flex-container"} onClick={() => navigate("/what-we-do/individual-and-parental-coaching")}>
                                                          <span className="top"><LuMoveDownRight/></span>

                                                          <img src={coaching} alt="" />

                                                             <div className="opened-texts">
                                                                        <div className="column">
                                                                                   <h2>04</h2>
                                                                                   <p>Individual and Parental Coaching</p>
                                                                        </div>
                                                                        <span><LuMoveUpRight /></span>
                                                             </div>
                                                          <div className="inverted-texts">
                                                                     <h3>04</h3>
                                                                      <h2>Individual and Parental Coaching</h2>
                                                          </div>
                                                 </div>
                                       </div>
                            </div>
                </div>
    </div>
  )
}

export default ServicesSection