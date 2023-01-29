import React, { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";

const Header = ({ btnStyle, HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  const headerClasses = `header-default`;

  return (
    <>
      <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
        <div style={{ marginRight: "1%", marginLeft: "1%" }} className="position-relative">
          <div className="row align-items-center row--0" style={{ flexWrap: "nowrap", marginRight: "10%" }}>
            <div className="col-md-2 col-4">
              <a href="/">
                <img src="/images/icons/logo-1.png" alt="Logo" />
              </a>
            </div>
            <div className="col-lg-11  col-md-6 col-8 position-static" style={{ display: "flex", justifyContent: "end" }}>
              <div className="">
                <nav className="mainmenu-nav d-none d-xxl-block">
                  <Nav />
                </nav>
                <div className="mobile-menu-bar ml--5 d-block d-xxl-none">
                  <div className="hamberger">
                    <span className="hamberger-button" onClick={onCanvasHandler}>
                      <FiMenu />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default Header;
