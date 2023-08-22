import { React } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Form } from '../../../src/components/index';

export default function FormItems() {
  const validationErrors = {};

  return (
    <Row>
      <Col xs={12}>
        { /* Reader's number */}
        <Form.Item
          name="number"
          displayName="По-замовчуванню:"
          errors={validationErrors}
        />
      </Col>
      <Col xs={12}>
        { /* Reader's number horizontal */}
        <Form.Item
          name="number_horizontal"
          displayName="Горизонтальний:"
          horizontal
          errors={validationErrors}
        />
      </Col>
      <Col xs={12} className="d-flex">
        { /* Reader's number horizontal fullwidth */}
        <Form.Item
          name="number_horizontal_fullwidth"
          displayName="Горизонтальний на повну ширину"
          horizontal
          fullwidth
          errors={validationErrors}
        />
        <Form.Item
          name="female"
          displayName="Жінка?"
          type="checkbox"
          horizontal
          errors={validationErrors}
        />
      </Col>
    </Row>
  );
}
