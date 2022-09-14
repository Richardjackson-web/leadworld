import React, { useState } from 'react';
import './Form.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export default function Forms() {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container back">
      <Container>
        <h1 className="register">Register for LPC Conference</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
          size="sm"
            required
            type="text"
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={6}>  
        <Form.Group controlId="validationCustom02">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={6}>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="rad">
          <Form.Label className="gender">Gender</Form.Label> 
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
        </Col>
        <br />
        <Form.Group controlId="validationCustom02">
          <Form.Label>Expectations from the conference</Form.Label>
          <Form.Control as="textarea" aria-label="With textarea" />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
      </Row>
      <button className="but" type="submit">Submit form</button>
    </Form>
    </Container>
    </div>
  )
}
