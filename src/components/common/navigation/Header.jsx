import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { HiOutlineMenu } from "react-icons/hi";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const { pathname } = useLocation();
  //console.log(pathname.slice(1,11))
  return (
    <header>
              <div className="inner-row-2">
                        <div className="header-content">
                                  <Link to={"/"} className="logo">
                                          <img src={logo} alt="" />
                                  </Link>
                                  <nav>
                                          <ul>
                                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                                    <li><NavLink to={"/about-us"}>Who We Are</NavLink></li>
                                                    <li><NavLink className={pathname.slice(1, 11) === "what-we-do" ? "active" : ""} to={"/what-we-do/specialized-education-diagnostic-assessments"}>What We Do</NavLink></li>
                                                    <li><NavLink className={pathname.slice(1, 10) === "resources" ? "active" : ""} to={"/resources"}>Resources</NavLink></li>
                                          </ul>
                                  </nav>
                                  <div className="header-extra">
                                            <Link to={"/contact-us"}>Get in Touch</Link>

                                            <span className="menu-btn" onClick={() => setSidebarStatus(true)}>
                                                      <HiOutlineMenu />
                                            </span>
                                  </div>
                        </div>
              </div>
    </header>
  )
}

export default Header