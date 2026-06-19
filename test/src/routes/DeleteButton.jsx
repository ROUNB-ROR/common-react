import { React } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { DeleteButton } from '../../../src/components';

export default function Component() {
  return (
    <Row>
      <Col xs={12}>
        <DeleteButton deletePath="/" entityName="цю тестову сутність"/>
      </Col>
      <Col xs={12}>
        <DeleteButton deletePath="/" entityName="цю іншу тестову сутність">
          Інший текст всередині кнопки
        </DeleteButton>
      </Col>
    </Row>
  );
}
