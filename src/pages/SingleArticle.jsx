import { useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import { useArticlesFetch } from "../hooks/articlesFetch";
import { Markup } from 'interweave'
import CallToAction from "../components/common/CallToAction";
import Footer from "../components/common/Footer";

const SingleArticle = () => {
    const { title } = useParams();
    const { posts } = useArticlesFetch();

    const data = posts && posts.find(item => item.slug === title)

  return (
    <>
          <Navbar />
          <div className="single-article-wrapper">
                   <div className="inner-row">
                             { data ?
                             <div className="single-article-content">
                                     <div className="article-intro">
                                              <h1>{ data && data.title.rendered}</h1>
                                              <div className="article-intro-group">
                                                       <h4>Written by: <span>Martine</span></h4>
                                                       <span className="line"></span>
                                                       <p>12th January, 2025</p>
                                              </div>
                                     </div>
                                       <div className="single-article-image">
                                               <img src={data && data._embedded["wp:featuredmedia"][0].source_url} alt="" />
                                       </div>
                                       <div className="single-article-body">
                                                 <Markup content={data && data.content.rendered} />
                                       </div>
                              </div>
                               :
                               <div className="loader-wrap">
                                         <span className="loader"></span>
                               </div>
                               }
                   </div>
          </div>

          <CallToAction />
          <Footer />
    </>
  )
}

export default SingleArticle