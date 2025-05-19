import { useNavigate } from "react-router-dom"
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useArticlesFetch } from "../../hooks/articlesFetch";

const ResourcesBody = () => {
   const { posts } = useArticlesFetch();
   const navigate = useNavigate();
  return (
    <div className="resources-body">
               <div className="inner-row">
                          <div className="resources-body-content">
                                    <h3 className="intro">From expert tips to real success stories, we share everything you need to create a more inclusive learning environment for every student. Stay inspired, informed, and empowered to make a difference!</h3>

                                   { posts && posts.length > 0 ? 
                                           <div className="blog-row">
                                                      { posts.map(item =>
                                                         <div className="article-moja" key={item.id} onClick={() => navigate(`/article/${item.slug}`)}>
                                                             <div className="image-section">
                                                                                  <img src={item._embedded["wp:featuredmedia"][0].source_url} alt="" />
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
                                                                        <h3>{item.title.rendered}</h3>
                                                        </div>
                                                      )}
                                           </div>
                                     :
                                       <div className="loader-wrap">
                                                 <span className="loader"></span>
                                       </div>
                                    }
                                    <div className="blog-row">
       
                                    </div>
                          </div>

               </div>
    </div>
  )
}

export default ResourcesBody