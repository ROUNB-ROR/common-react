import { React } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FormItem } from '../../src/components/index';

function App() {
  const validationErrors = {};

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          { /* Reader's number */}
          <FormItem
            name="number"
            displayName="№ чит. кв.:"
            errors={validationErrors}
          />
        </Col>
        <Col xs={12}>
          { /* Reader's number horizontal */}
          <FormItem
            name="number_horizontal"
            displayName="№ чит. кв.:"
            horizontal
            errors={validationErrors}
          />
        </Col>
        <Col xs={12} className="d-flex">
          { /* Reader's number horizontal fullwidth */}
          <FormItem
            name="number_horizontal_fullwidth"
            displayName="№ чит. кв.:"
            horizontal
            fullwidth
            errors={validationErrors}
          />
          <FormItem
            name="female"
            displayName="Жінка?"
            type="checkbox"
            horizontal
            errors={validationErrors}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
