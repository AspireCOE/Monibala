import React from 'react'
import FloatingLabel from 'bootstrap/FloatingLabel';
import Form from 'bootstrap/Form';

function FormFloatingSelect() {
  return (
    <FloatingLabel controlId="floatingSelect" label="Add products">
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
  );
}

export default FormFloatingSelect;