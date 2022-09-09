import React from 'react';
import './Activities.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Img2 from '../../Asset/Images/ylp.jpg';
import Img3 from '../../Asset/Images/be-more.jpg';

export default function Activities() {
  return (
    <div className="act-main">
        <span className="act-head">Activities</span>
        <p className="act-para">Over the years Leadworld has impacted thousands of youth,
        career persons and leaders through our various mentorships, trainings, seminars and conferences.
        </p>
        <Container className="contain">
              <Row className="ylp-row">
                <Col sm="6" className="ylp-col1">
                <h1 className="ylp-head">Lead Young Project</h1>
                  <p className="ylp-para">
                    LeadWorld picks a secondary school
                    to mentor the students for one year on
                    leadership and life skills.
                  </p>
                </Col>
                <Col sm="6" >
                  <div className="vis-img">
                  <Card>
                      <Card.Img variant="top" src={Img2} />
                  </Card>
                  </div>
                </Col>
              </Row>

              <Row className="not-visible">
                <Col sm="6">
                <div className="vis-img">
                  <Card>
                      <Card.Img variant="top" src={Img3} />
                  </Card>
                  </div>
                </Col>
                <Col sm="6" className="ylp-col2">
                <h1 className="ylp-head">Be More Network</h1>
                  <p className="ylp-para">
                    Young youths get mentored for 6 months
                    on areas that cut across leadership, personal development,
                    time management, self confidence and lots more.
                  </p>
                </Col>
              </Row>

              <Row className="visible">
                <Col sm="6" className="ylp-col2">
                <h1 className="ylp-head">Be More Network</h1>
                  <p className="ylp-para">
                    Young youths get mentored for 6 months
                    on areas that cut across leadership, personal development,
                    time management, self confidence and lots more.
                  </p>
                </Col>
                <Col sm="6">
                <div className="vis-img">
                  <Card>
                      <Card.Img variant="top" src={Img3} />
                  </Card>
                  </div>
                </Col>
              </Row>
            </Container>
    </div>
  )
}
