import { Link, useNavigate } from "react-router-dom"
import { HiOutlineArrowUpRight } from "react-icons/hi2";
// import { articles } from "../../data/articles";

const BlogSection = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-section">
               <div className="inner-row">
                           <div className="blog-section-content">
                                        <div className="blog-intro">
                                                     <div className="left-column">
                                                               <h3>Resource Center<span>.</span></h3>
                                                               <h2>Latest Insights in Inclusive Education & Special Needs.</h2>
                                                     </div>
                                                     <div className="right-column">
                                                              <p>From expert tips to real success stories, we share everything you need to create a more inclusive learning environment for every student. Stay inspired, informed, and empowered to make a difference!</p>
                                                              <Link to={"/resources"}>More Insights <span><HiOutlineArrowUpRight /></span></Link>
                                                     </div>
                                        </div>

                                        { data && data.length > 0 ? 
                                                   <div className="blog-row">
                                                             {  data && data.slice(0, 3).map(item => 
                                                                  <div className="article-moja" key={item.id} onClick={() => navigate(`/resource/${item.slug}`)}>
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
                           </div>
               </div>
    </div>
  )
}

export default BlogSection