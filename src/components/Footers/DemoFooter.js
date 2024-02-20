import React from "react";
import { Row, Container } from "reactstrap";
import './footer.css'; 
function DemoFooter() {
  return (
    <footer className="footer bg-dark text-light">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  rel="noreferrer"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  rel="noreferrer"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © 2023
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
