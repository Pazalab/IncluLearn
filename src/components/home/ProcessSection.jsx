import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ProcessSection = () => {
    const cardsWrapper = useRef();
    const processRef = useRef();

    useEffect(() => {
            const cards = cardsWrapper.current.querySelectorAll(".process-box-moja");
           
            let ctx = gsap.context(() =>{
                    if(window.innerWidth > 768 && window.innerWidth < 1090){
                          gsap.to(cardsWrapper.current, {
                                x: () => (cardsWrapper.current.scrollWidth) * -1,
                                xPercent: 60,
                                scrollTrigger: {
                                        trigger: processRef.current,
                                        start: "top top",
                                        end: "+=" + (cards.length / 2) * 100 + "%",
                                        scrub: true,
                                        pin: true,
                                        invalidateOnRefresh: true,
                                        //markers: true
                                }
                          })
                    }
                    if(window.innerWidth > 1090){
                         gsap.to(cardsWrapper.current, {
                                x: () => (cardsWrapper.current.scrollWidth) * -1,
                                xPercent: 80,
                                scrollTrigger: {
                                        trigger: processRef.current,
                                        start: "top top",
                                        end: "+=" + (cards.length / 2) * 100 + "%",
                                        scrub: true,
                                        pin: true,
                                        invalidateOnRefresh: true,
                                        //markers: true
                                }
                          })
                    }
            })

            return () => ctx && ctx.revert();
    })
  return (
    <div ref={processRef} className="process-section">
               <div className="inner-row">
                         <div className="process-content">
                                      <h3>Our approach goes beyond simply addressing learning challenges—we equip students with the confidence, strategies, and lifelong skills they need to not only succeed academically but also navigate the world with independence and self-assurance.</h3>

                                      <div  className="process-boxes">
                                               <div ref={cardsWrapper} className="process-wrap-scroller">
                                                        <div className="process-box-moja">
                                                                      <h2>01</h2>
                                                                      <h4>Consultation</h4>
                                                                      <p>Every student is unique, and so are their learning challenges. That's why we begin with an in-depth consultation to try understand the learner's strengths, struggles and goals. Whether you're a parent looking for answers, a teach seeking better strategies, or a school wanting to create a more inclusive learning environment, this steps ensures we are aligned on the best way forward. We take the time to listen, ask the right questions, and set clear expectations.</p>
                                                          </div>
                                                          <div className="process-box-moja">
                                                                      <h2>02</h2>
                                                                      <h4>Diagnostic Assessment</h4>
                                                                      <p>We don't belive in assumptions — every learning challenge has an underlying cause. Our specialized diagnostic assessments go beyond surface-level observations to uncover the root of cognitive, learning, or behavioural difficulties. Using research-backed tools and techniques, we assess conditions like ADHD, dyslexia, dyscalculia, autism spectrum disorders, and other learning differences. These insights allow us to provide clear, evidence-based recommendations that ensure students get the right support, tailored to their exact needs.</p>
                                                            </div>
                                                             <div className="process-box-moja">
                                                                       <h2>03</h2>
                                                                      <h4>Solutions Implementation (IEP/ADP)</h4>
                                                                      <p>Once we have a clear picture of the student's needs, we develop a personalized roadmap to success. This isn't a generic approach, it's a carefully designed strategy that aligns with the student's unique strengths, challenges, and learning style. Whether it involves adapted teaching methods, specialized learning resources, or behaviour support strategies, we ensure that the plan is actionable, practical and realistic for the learner's daily life.</p>
                                                          </div>
                                                          <div className="process-box-moja">
                                                                       <h2>04</h2>
                                                                      <h4>Coaching for Lasting Change</h4>
                                                                      <p>A great plan needs strong execution, and that's where our coaching comes in. We work closely with you to ensure that intervention strategies are not just implemented but truly understood. This involves hands-on training, modeling best practices, and offering guidance to reinforce learning concepts. We help students build essential skills like self-regulation, problem-solving, and adaptive learning techniques, ensuring they can apply what they learn in real-world settings. With continuous support and reinforcement, we make sure strategies stick and create lasting change.</p>
                                                          </div>
                                                          <div className="process-box-moja">
                                                                       <h2>05</h2>
                                                                      <h4>Ongoing Support & Progress Tracking</h4>
                                                                      <p>Growth is a journey, not a one-time event. That's why we provide ongoing monitoring, adjustments, and support to ensure students continue making progress. Through regular follow-ups, performance tracking, and modifications to intervention plans where needed, we ensure that no student is left behind. Whether its refining an IEP, providing additional coaching, or working with teachers to fine-tune instructional strategies, we stay involved every step of the way.</p>
                                                          </div>
                                               </div>
                                      </div>
                         </div>
               </div>
    </div>
  )
}

export default ProcessSection