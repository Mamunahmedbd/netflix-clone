import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const blackNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", blackNavbar);
    return () => window.removeEventListener("scroll", blackNavbar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Nav;
