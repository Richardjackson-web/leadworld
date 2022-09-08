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
              <Row>
                <Col>
                  <p className="para-head">To raise a generation of young persons with the heart 
                      for leadership excellence.
                  </p>
                </Col>
                <Col>
                  <div className="vis-img">
                  <Card className="img1">
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
