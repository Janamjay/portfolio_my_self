import React, { useState } from "react";
import { Link} from "react-router-dom";
import nav from "./navbar.module.css";
import { CgMenu, CgClose } from "react-icons/cg";
import avator from './avator.png'

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
      <nav className={nav.main}>
        <div className={nav.left}>
          <div className={nav.title}>
            <img src={avator} alt="" />
            <Link to="/"><h1>Janamjay Kumar</h1></Link>
          </div>
        </div>
        <div className={`${show ? nav.Active_Links : nav.right} `}>
          <li className={nav.common} onClick={() => setShow(false)}>
            <Link to="/"> Home</Link>
          </li>
          <li className={nav.common} onClick={() => setShow(false)}>
            <Link to="/project">Projects</Link>
          </li>
          <li className={nav.common} onClick={() => setShow(false)}>
            <Link to="/about">About Me</Link>
          </li>
          <li className={nav.common} onClick={() => setShow(false)}>
            <Link to="/contact">Contact Me</Link>
          </li>
        </div>

        <div className={nav.mobile_navbar_btn}>
          <div>
            {show ? (
              <span className={nav.close} onClick={() => setShow(false)}>
                <CgClose />
              </span>
            ) : (
              <span className={nav.menu} onClick={() => setShow(true)}>
                <CgMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
  );
}
