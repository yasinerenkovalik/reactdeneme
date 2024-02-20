// Gerekli bağımlılıkları içe aktar

import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./consepts.css";
import myImage from "../../assets/img/conseptss/consept1.jpg"; 

function SectionExamples() {
  // Resim dosyalarının adlarını içeren bir dizi tanımla
  const imageFilenames = ["consept1.jpg", "consept2.jpg","consept2.jpg","consept2.jpg","consept2.jpg","consept2.jpg","consept2.jpg" /* İhtiyaca göre daha fazla dosya adı ekleyin */];

  return (
    <div className="section">
      <Container>
        <Row className="example-page">
          {imageFilenames.map((filename, index) => (
            <Col key={index} className="mb-3" xs="12" sm="6" md="4" lg="3">
              <div className="text-center">
                <img
                  alt=""
                  className="img-rounded img-responsive"
                  src={myImage}
                  style={{ width: "300px", height: "200px" }}
                />
                <Link to="/consept/1">
                  <Button
                    className="btn-outline-neutral btn-round d-block mx-auto"
                    color="default"
                    target="_blank"
                  >
                    {"Konsept Detayları "}
                  </Button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SectionExamples;
