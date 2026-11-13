import { React } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function JumpToContent() {
  return (
    <>
      <Row>
        <Col xs={12}>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
          <p>Not content</p>
        </Col>
      </Row>
      <Row id="content">
        <Col xs={12}>
          <p>Start of content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Col>
      </Row>
    </>
  );
}
