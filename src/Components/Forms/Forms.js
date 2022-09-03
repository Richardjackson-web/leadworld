import React from 'react';
import './Form.css';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Forms() {
  return (
    <div className="container back">
        <h1>Register for LPC Conference</h1>
        <Row className="g-2 form-row">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Name">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel><br />
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel><br />
        <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel><br />
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
    </Row>
    </div>
  )
}
