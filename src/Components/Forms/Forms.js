import React, { useState } from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

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
        <h1 className="register">Register for LPC Conference</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group><br />
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group><br />
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group><br />
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group><br />
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Expectations from the conference</Form.Label>
          <Form.Control
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <div className="button">
      <Button type="submit">Submit form</Button>
      </div>
      </Row>
    </Form>
    </div>
  )
}
