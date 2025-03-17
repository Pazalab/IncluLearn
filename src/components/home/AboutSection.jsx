import { Link } from "react-router-dom"
import { LuMoveRight } from "react-icons/lu";
import specialized from "../../assets/specialized.png"
import personalized from "../../assets/personalized.png"
import teacher from "../../assets/teacher.png"
import innovation from "../../assets/innovation.png"

const AboutSection = () => {
  return (
    <div className="about-section">
              <div className="inner-row">
                        <div className="about-section-content">
                                   <div className="about-section-column">
                                                <h3>Who We Are<span>.</span></h3>
                                                <h2>Redefining learning to create a world where every student thrives.</h2>
                                   </div>
                                   <div className="about-section-column">
                                             <p><span>IncluLearn Educational Consultancy is a leading special education firm in Rwanda</span>, dedicated to transforming learning for students with special needs. With a deep expertise and a student-centered approach, we create solutions that address cognitive, mental health, and behavioural challenges ensuring every learner receives the support they need to thrive.</p>
                                             <p>We collaborate with families, educators, institutions and governments to develop strategies that drive inclusing and success. Our tailored solutions empower students to thrive in school and gain the skills to excel in society.</p>
                                             <Link to={"/about-us"}>Read More <span><LuMoveRight /></span></Link>
                                   </div>
                        </div>

                        <div className="reasons-wrapper">
                                   <h3>Looking for a partner who truly understands special education? Finding the right support can be challenging, but we make it easier. Here’s why working with us makes all the difference!</h3>

                                   <div className="reasons-wrapper-row">
                                             <div className="reason-moja">
                                                          <img src={specialized} alt="" />
                                                          <h4>We Get to the Root, Not Just the Surface</h4>
                                                          <p>Most organizations focus on general support, but we go deeper. Our specialized diagnostic assessments uncover the exact learning, cognitive or behavioral challenges a students faces - ensuring the right solutions from the start.</p>
                                             </div>
                                             <div className="reason-moja">
                                                        <img src={personalized} alt="" />
                                                        <h4>Personalized Support for Every Learner</h4>
                                                        <p>No two students are the same, and neither are our solutions. We design individual education programs and accomodation plans based on real data, giving each student the customized support they need to thrive.</p>
                                             </div>
                                             <div className="reason-moja">
                                                        <img src={teacher} alt="" />
                                                        <h4>Teachers get Practical, Actionable Tools</h4>
                                                        <p>Our training isn't just theory - it's built for real classrooms. We equip educators with hands-on strategies in Differentiated Instruction and Universal Design for Learning (UDL) to create inclusive, engaging learning environments.</p>
                                             </div>
                                             <div className="reason-moja">
                                                        <img src={innovation} alt="" />
                                                        <h4>We blend Innovation with Proven Research</h4>
                                                        <p>We don't just follow best practices - we refine and enhance them. Our approach combines cutting-edge research with practical applications, ensuring real impact for students, teachers and schools</p>
                                             </div>
                                   </div>
                        </div>
              </div>
    </div>
  )
}

export default AboutSection