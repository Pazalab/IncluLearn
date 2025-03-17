import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"
import { testimonials } from "../../data/testimonials";
import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
              <div className="inner-row">
                        <div className="testimonials-section-content">
                                     <div className="testimonials-intro">
                                              <h2>Client's Feedback on Our Work</h2>
                                              <p>Discover how our work has transformed the lives of students, families, and educators, reflecting our commitment to inclusive education and meaningful results.</p>
                                     </div>

                                     <div className="testimonials-slider">
                                               <Swiper
                                                      slidesPerView={1}
                                                      spaceBetween={30}
                                                      loop={true}
                                                      autoplay = {{
                                                           delay: 6000,
                                                           disableOnInteraction: false
                                                      }}
                                                      modules={[Autoplay]}
                                                      breakpoints={{
                                                        1090: {
                                                                slidesPerView: 3,
                                                                spaceBetween: 20
                                                          },
                                                         600: {
                                                                slidesPerView: 2,
                                                                spaceBetween: 20
                                                         }
                                                     }}
                                               >
                                                        { testimonials.map(slide => 
                                                                <SwiperSlide key={slide.id}>
                                                                            <div className="testimonial-moja">
                                                                                      <span className="quotes"><RiDoubleQuotesL /></span>
                                                                                       <p>{slide.content}</p>

                                                                                       <h3>{slide.name} <span>~ {slide.role}</span></h3>
                                                                            </div>
                                                                </SwiperSlide>
                                                        )}
                                               </Swiper>
                                     </div>
                        </div>
              </div>
    </div>
  )
}

export default TestimonialsSection