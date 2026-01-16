import { React } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Form } from '../../../src/components/index';

export default function FormSelects() {
  const validationErrors = {};

  const items = [
    { display: '123', value: '123' },
    { display: '────', disabled: true },
    { display: '444', value: '444' },
    { display: '555', value: '555' },
  ];

  return (
    <Row>
      <Col xs={12}>
        { /* Reader's number */}
        <Form.Select
          name="number"
          displayName="По-замовчуванню:"
          errors={validationErrors}
          items={items}
        />
      </Col>
      <Col xs={12}>
        { /* Reader's number */}
        <Form.Select
          name="number"
          displayName="Горизонтальний:"
          horizontal
          errors={validationErrors}
          items={items}
        />
      </Col>
      <Col xs={8} className="d-flex">
        { /* Reader's number */}
        <Form.Select
          name="number"
          displayName="Горизонтальний, на повну ширину:"
          horizontal
          fullwidth
          errors={validationErrors}
          items={items}
        />
      </Col>
    </Row>
  );
}
