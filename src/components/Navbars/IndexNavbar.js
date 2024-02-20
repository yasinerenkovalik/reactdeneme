import React from "react";

import classnames from "classnames";
import { Link } from "react-router-dom";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
      <div className="navbar-translate">
          <Link to="/ındex3" className="nav-link">
            <NavbarBrand data-placement="bottom" target="_blank" title="Coded by Creative Tim">
              Lotus Organizasyon
            </NavbarBrand>
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", { toggled: navbarCollapse })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
            <NavItem>
              <Link to="/consepts" className="nav-link">
                Konseptlerimiz {/* İçeriğinizi buraya yazın */}
            
              </Link>
            </NavItem>
            </NavItem>

            <NavItem>
              <Link to="/about" className="nav-link">
                Hakkımızda {/* İçeriğinizi buraya yazın */}
            
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/communication" className="nav-link">
                İletisim {/* İçeriğinizi buraya yazın */}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
