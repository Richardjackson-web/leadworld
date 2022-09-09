import React from 'react';
import './Activities.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Img2 from '../../Asset/Images/ylp.jpg';
import Img3 from '../../Asset/Images/be-more.jpg';
import Img4 from '../../Asset/Images/exclusive.jpg';
import Img5 from '../../Asset/Images/lpc conference.jpg'

export default function Activities() {
  return (
    <div className="act-main">
        <span className="act-head">Activities</span>
        <p className="act-para">Over the years Leadworld has impacted thousands of youth,
        career persons and leaders through our various mentorships, trainings, seminars and conferences.
        </p>
        <Container className="contain">

            {/* Young Lead Project */}

              <div className="act-one">
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
              </div>
          
            {/* Be More */}

              <div>
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
              </div>

            {/* Exclusive Session */}
              <div>
              <Row className="exclusive">
                  <Col sm="6" className="exl-col">
                    <h1 className="exl-head">Exclusive Session</h1>
                    <p className="exl-para">
                      We host an Exclusive Session every three months 
                      where we gather young persons together to talk 
                      about topics and issues that concerns a young person.
                    </p>
                  </Col>
                  <Col sm="6">
                    <div className="exl-img">
                    <Card>
                      <Card.Img variant="top" src={Img4} />
                    </Card>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* LPC Conference */}

              <div>
                <Row className="not-visible">
                  <Col sm="6">
                    <div className="vis-img">
                    <Card>
                      <Card.Img variant="top" src={Img5} />
                    </Card>
                    </div>
                  </Col>
                  <Col sm="6" className="lpc-col2">
                    <h1 className="lpc-head">LPC Conference</h1>
                    <p className="lpc-para">
                      LPC Conference, the largest leadership conference
                      in South-South Nigeria holds annually. We bring together 
                      young leaders, career persons, entrepreneurs, students 
                      under one hall and impact on them life-changing thoughts.
                    </p>
                  </Col>
                </Row>

                <Row className="visible">
                <Col sm="6" className="lpc-col2">
                    <h1 className="lpc-head">LPC Conference</h1>
                    <p className="lpc-para">
                      LPC Conference, the largest leadership conference
                      in South-South Nigeria holds annually. We bring together 
                      young leaders, career persons, entrepreneurs, students 
                      under one hall and impact on them life-changing thoughts.
                    </p>
                  </Col>
                  <Col sm="6">
                    <div className="vis-img">
                    <Card>
                      <Card.Img variant="top" src={Img5} />
                    </Card>
                    </div>
                  </Col>
                </Row>
              </div>
              
            </Container>
    </div>
  )
}
