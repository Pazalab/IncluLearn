import React, { useContext, useEffect, useRef } from 'react'
import { CgClose } from 'react-icons/cg'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from "../../../assets/logo2.png"
import { IoMdCall } from "react-icons/io";
import { BsEnvelope, BsPinMap } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { BiLogoLinkedin } from "react-icons/bi";
import gsap from 'gsap';
import { sidebarContext } from './navcontext';

const Sidebar = () => {
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const wrapperRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
       if(sidebarStatus){
              wrapperRef.current.classList.add("active");

              let tl = gsap.timeline();

              tl.to(wrapperRef.current.querySelector(".sidebar-overlay"), {
                     y: 0,
                     duration: 1
              })

              tl.to(wrapperRef.current.querySelector(".sidebar-header"), {
                     y: "50%",
                     opacity: 1,
                     duration: 0.5
              })

              tl.to(wrapperRef.current.querySelector(".sidebar-nav ul"), {
                     opacity: 1,
                     duration: 0.4
              })

              wrapperRef.current.querySelectorAll(".sidebar-nav ul li a").forEach(item => {
                     tl.to(item, {
                           x: 0,
                           opacity: 1,
                           duration: 0.5
                     })
              })

              tl.to(wrapperRef.current.querySelector(".sidebar-contact-details"), {
                      y: 0,
                      duration: 0.6,
                      opacity: 1
              })
        }
  }, [sidebarStatus])

  const handleSidebarClose = () => {
              let tl = gsap.timeline();

              tl.to(wrapperRef.current.querySelector(".sidebar-contact-details"), {
                     y: "100px",
                     duration: 0.5,
                     opacity: 0
             })

              wrapperRef.current.querySelectorAll(".sidebar-nav ul li a").forEach(item => {
                     tl.to(item, {
                           x: "-100%",
                           opacity: 0,
                           duration: 0.2
                     })
              })

              tl.to(wrapperRef.current.querySelector(".sidebar-nav ul"), {
                     opacity: 0,
                     duration: 0.2
              })

              tl.to(wrapperRef.current.querySelector(".sidebar-header"), {
                     y: "-50%",
                     opacity: 0,
                     duration: 0.5
              })

             tl.to(wrapperRef.current.querySelector(".sidebar-overlay"), {
                     y: "-100%",
                     duration: 1
              })
       
              setTimeout(function(){
                     wrapperRef.current.classList.remove("active")
              }, 3600)

              setSidebarStatus(false)
  }
  return (
    <div ref={wrapperRef} className='sidebar-section'>
               <div className="sidebar-overlay"></div>
               <div className="sidebar-content">
                        <div className="sidebar-content-inner">
                                   <div className="sidebar-header">
                                                 <Link to={"/"} className='logo'>
                                                            <img src={logo} alt="" />
                                                 </Link>
                                                 <span onClick={handleSidebarClose}><CgClose /></span>
                                   </div>
                                   <div className="sidebar-nav">
                                              <ul>
                                                     <li><NavLink to={"/"}>Home</NavLink></li>
                                                    <li><NavLink to={"/about-us"}>Who We Are</NavLink></li>
                                                    <li><NavLink to={"/what-we-do"}>What We Do</NavLink></li>
                                                    <li><NavLink className={pathname.slice(1,8) === "article" ? "active" : ""} to={"/articles"}>Articles</NavLink></li>
                                                    <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                              </ul>
                                   </div>

                                   <div className="sidebar-contact-details">
                                              <h3>Get in Touch</h3>

                                              <div className="sidebar-contact-grid">
                                                          <div className="sidebar-contact-column">
                                                                     <p><span><IoMdCall /></span> +250 1234 56789</p>
                                                                     <p><span><BsEnvelope /></span> hello@inclulearn.com</p>
                                                          </div>
                                                          <div className="sidebar-contact-column">
                                                                     <p><span><BsPinMap /></span>8 KN 4 Av, Centenary House, 4th Floor</p>
                                                                     <div className="social-links">
                                                                                <h4>Let's connect</h4>
                                                                                 <ul>
                                                                                          <li><Link to={"/"}><span><GrFacebookOption /></span></Link></li>
                                                                                          <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                                          <li><Link to={"/"}><span><RxInstagramLogo /></span></Link></li>
                                                                                          <li><Link to={"/"}><span><BiLogoLinkedin /></span></Link></li>
                                                                                 </ul>
                                                                     </div>
                                                          </div>
                                              </div>
                                   </div>
                        </div>
               </div>
    </div>
  )
}

export default Sidebar