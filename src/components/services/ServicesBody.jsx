import { solutions } from "../../data/solutions"
import { useNavigate, useParams } from "react-router-dom"

const ServicesBody = () => {
    const { name } = useParams();
    const navigate = useNavigate();
  return (
    <div className="services-body">
             <div className="inner-row">
                        <div className="services-body-content">
                                    <div className="services-tabs">
                                            <ul>
                                                      { solutions.map(item =>
                                                             <li className={ name == item.url_param ? "active" : ""} onClick={() => navigate(item.link)} key={item.id}>{item.title}</li>
                                                      )}
                                            </ul>
                                    </div>
                                    <div className="services-container">
                                                { solutions.filter(item => item.url_param === name).map(kitu => 
                                                       <div className="service-content-moja" key={kitu.id}>
                                                                 <div className="services-body-texts">
                                                                           <h3>{kitu.title}</h3>
                                                                           { kitu.excerpt.map(item => <p key={item}>{item}</p>)}
                                                                 </div>
                                                                 <img src={kitu.image} alt="" />
                                                     </div>
                                                )}
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default ServicesBody