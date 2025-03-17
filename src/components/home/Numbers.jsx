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
                                                             <h2><span>90%</span> of Families See Noticeable Improvement</h2>
                                                             <p>Our personalized interventions have empowered children to learn with confidence and overcome challenges.</p>
                                                   </div>
                                                   <div className="numbers-wrap">
                                                             <h2><span>50</span> Schools transformed</h2>
                                                             <p>We've helped schools build inclusive environments where every student can thrive.</p>
                                                   </div>
                                                   <div className="numbers-wrap">
                                                             <h2><span>100</span> Teachers Trained</h2>
                                                             <p>Our training has equipped educators with practical strategies to support diverse learners effectively.</p>
                                                   </div>
                                        </div>
                                     <img src={student} alt="" />
                        </div>
             </div>
    </div>
  )
}

export default Numbers