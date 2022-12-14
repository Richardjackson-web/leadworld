import React from 'react';
import './Vision.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Img1 from '../../Asset/Images/vis.jpg';

export default function Vision() {
  return (
    <div>
        <div>.
            <span className="vis-head">Vision</span>
            <Container className="contain">
              <Row className="row-vis">
                <Col sm="6">
                  <p className="para-head">To raise a generation of young persons with the heart 
                      for leadership excellence.
                  </p>
                </Col>
                <br />
                <Col sm="6">
                  <div className="vis-img">
                  <Card className="vis-img1">
                      <Card.Img variant="top" src={Img1} />
                  </Card>
                  </div>
                </Col>
              </Row>
            </Container>
           
        </div>
    </div>
  )
}
