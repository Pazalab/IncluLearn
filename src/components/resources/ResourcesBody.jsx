import { articles } from "../../data/articles"
import { Link } from "react-router-dom"
import { HiOutlineArrowUpRight } from "react-icons/hi2";
const ResourcesBody = () => {
  return (
    <div className="resources-body">
               <div className="inner-row">
                          <div className="resources-body-content">
                                    <h3 className="intro">From expert tips to real success stories, we share everything you need to create a more inclusive learning environment for every student. Stay inspired, informed, and empowered to make a difference!</h3>

                                    <div className="blog-row">
                                             { articles.map(item => 
                                                    <div className="article-moja" key={item.id}>
                                                            <div className="image-section">
                                                                     <img src={item.image} alt="" />
                                                                    <div className="link-btn">
                                                                             <span><HiOutlineArrowUpRight /></span>
                                                                     </div>
                                                                    <div className="split-overlay">
                                                                            <div className="splits">
                                                                                    <div className="overlay-left"></div>
                                                                                    <div className="overlay-right"></div>
                                                                             </div>
                                                                    </div>
                                                            </div>
                                                            <h3>{item.title}</h3>
                                                    </div>
                                              )}
                                    </div>
                          </div>

               </div>
    </div>
  )
}

export default ResourcesBody