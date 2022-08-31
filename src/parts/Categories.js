import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Prospektus from "../assets/images/prospektus.jpeg";
import Brosur from "../assets/images/brosur.png";

export default function Categories() {
  return (
    <div className="categories">
      <Container>
        <Row className="text-center">
          <Col>
            <h5>Prospektus</h5>
            <img src={Prospektus} style={{ height: 250 }} />
          </Col>
          <Col>
            <h5>Brosur</h5>
            <img src={Brosur} />
          </Col>
          <Col>
            <h5>Fund Fact Sheet</h5>
            <img src={Brosur} />
          </Col>
          <Col>
            <h5>Formulir</h5>
            <img src={Prospektus} style={{ height: 250 }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
