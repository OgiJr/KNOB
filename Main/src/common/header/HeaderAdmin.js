import React, { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import NavAdmin from "./NavAdmin";
import MobileMenuAdmin from "./MobileMenuAdmin";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "@nextui-org/react";

const HeaderAdmin = ({ btnStyle, HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  const headerClasses = `header-default`;

  const { logout } = useAuth();

  return (
    <>
      <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
        <div style={{ marginRight: "3%", marginLeft: "3%" }} className="position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-10 col-md-6 col-8 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <NavAdmin />
                </nav>
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <span className="hamberger-button" onClick={onCanvasHandler}>
                      <FiMenu />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-4">
              <Button
                onPress={() => {
                  logout();
                }}
                color="error"
              >
                Изход
              </Button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenuAdmin show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default HeaderAdmin;
