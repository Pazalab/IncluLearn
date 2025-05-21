import happy from "../../assets/happy.jpg"
import student from "../../assets/student.jpg"

const Numbers = () => {
  return (
    <div className="numbers-section">
             <div className="inner-row">
                        <div className="numbers-section-content">
                                     <img src={happy} alt="" />
                                        <div className="numbers-column">
                                                  <div className="numbers-wrap">
                                                             <h2><span>1 in 7</span> children face serious psychological or behavioral problems.</h2>
                                                             <p>We equip schools and parents with the tools to identify and support learners early.</p>
                                                   </div>
                                                   <div className="numbers-wrap">
                                                             <h2><span>10 to 15 Million</span> estimated people in Africa with intellectual disabilities.</h2>
                                                             <p>We raise awareness about neurodiversity and cognitive disabilities</p>
                                                   </div>
                                                   <div className="numbers-wrap">
                                                             <h2><span>0.1</span> child psychiatrists per 100,000 people in Africa</h2>
                                                             <p>Our trainings advocate for systems where every child can learn—regardless of how they learn</p>
                                                   </div>
                                        </div>
                                     <img src={student} alt="" />
                        </div>
             </div>
    </div>
  )
}

export default Numbers