import about1 from "../../assets/about2.jpg"
const AboutContent = () => {
  return (
    <div className="about-content">
              <div className="inner-row">
                        <div className="about-content-row">
                                   <div className="about-content-image">
                                              <img src={about1} alt="" />
                                   </div>
                                   <div className="about-content-texts">
                                             <h3>Our Story: From Vision to Impact</h3>
                                             <p>IncluLearn was founded to address the significant challenges faced by students with special educational needs (SEN) in Rwanda. Many learners with disabilities or learning differences are excluded from mainstream education due to limited resources, inadequate teacher training, and societal stigma. Recognizing these gaps, Martine Irumva, an Inclusive and Special Education Strategist with over 13 years of expertise, established IncluLearn to drive real, lasting change. With a Master of Science in Education specializing in Learning Disabilities and a Board Certification in Cognitive and Student Mental Health, Martine has dedicated her career to diagnosing learning challenges, designing effective interventions, and empowering educators. Her vision is simple yet powerful: every child, regardless of their learning abilities, deserves to feel seen, valued, and given the opportunity to succeed.</p>
                                             <p>Today, IncluLearn is at the forefront of inclusive education in Rwanda, partnering with families, educators, schools, development partners and policymakers to implement research-driven strategies that ensure students with special needs thrive. Through specialized assessments, tailored learning programs, and hands-on teacher training, we are transforming classrooms and breaking barriers to education.</p>
                                             <p>Looking ahead, IncluLearn aims to expand its impact across Africa, advocating for stronger policies, developing innovative teaching solutions, and equipping even more educators with the skills needed to foster inclusive learning environments. </p>
                                             
                                   </div>
                        </div>

                        <div className="about-statements">
                                    <div className="statement-moja">
                                                   <h4>Our Mission</h4>
                                                   <p>To ensure that learners with diverse educational needs are provided with the support and opportunities they deserve to reach their fullest potential.</p>
                                    </div>
                                    <div className="statement-moja">
                                                   <h4>Our Vision</h4>
                                                   <p>We aspire to create a future where all learners in Rwanda and beyond regardless of their unique educational needs, are empowered to achieve their fullest potential in an inclusive, supportive and enabling environment.</p>
                                    </div>
                        </div>
              </div>
    </div>
  )
}

export default AboutContent