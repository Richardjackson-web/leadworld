import React from 'react';
import './Testimonials.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Testimonials() {
  return (
    <div>
        <div className="tes-contain">.
            <span className="tes-head">Testimonials</span>
            <Container>
              <Row className="tes-row">
                <Col sm="6">
                  <p className="tes-para">
                  </p>
                </Col>
                <br />
                <Col sm="6">
                  <div className="tes-img">
                  
                  </div>
                </Col>
              </Row>
            </Container>
           
        </div>
    </div>
  )
}
