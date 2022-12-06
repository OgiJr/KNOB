import React, { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import NavAdmin from "./NavAdmin";
import MobileMenuAdmin from "./MobileMenuAdmin";

const HeaderAdmin = ({ btnStyle, HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  const headerClasses = `header-default`;

  return (
    <>
      <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
        <div style={{ marginRight: "3%", marginLeft: "3%" }} className="position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-2 col-md-6 col-4">
              <a href="/">
                <h3 className=" text-xl">КНОБ</h3>
              </a>
            </div>
            <div className="col-lg-10 col-md-6 col-8 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <NavAdmin />
                </nav>
                <div className="header-btn">
                  <a className={`btn-default ${btnStyle}`} href="/login">
                    Изход
                  </a>
                </div>
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
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
      <MobileMenuAdmin show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default HeaderAdmin;
