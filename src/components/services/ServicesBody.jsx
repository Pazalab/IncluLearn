import { useState } from "react"
import { solutions } from "../../data/solutions"

const ServicesBody = () => {
    const [ active, setActive ] = useState(0)
  return (
    <div className="services-body">
             <div className="inner-row">
                        <div className="services-body-content">
                                    <div className="services-tabs">
                                            <ul>
                                                      { solutions.map(item =>
                                                             <li className={ active == item.id ? "active" : ""} onClick={() => setActive(item.id)} key={item.id}>{item.title}</li>
                                                      )}
                                            </ul>
                                    </div>
                                    <div className="services-container">
                                                { solutions.filter(item => item.id === active).map(kitu => 
                                                       <div className="service-content-moja">
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