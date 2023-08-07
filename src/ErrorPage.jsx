import React from 'react';
import {
  useNavigate, useRouteError, Link,
} from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Message from './Message/index';

// Default error page
export default function ErrorPage() {
  const error = useRouteError();
  //
  let errorText = error.statusText || error.message;
  if ((error.response) && (error.response.status === 404)) {
    errorText = 'Такий ресурс не знайдено.\nСпробуйте перевірити посилання.';
  }

  // Component
  const navigate = useNavigate();
  return (
    <Row as="main" className="flex-grow-1 align-items-center">
      <Col className="text-center">
        <Row>
          <Message header="Помилка!" text={errorText} />
        </Row>
        <p className="mt-5 text-center">
          <Button onClick={() => navigate(-1)}>Назад</Button>
        </p>
        <p className="mt-5 text-center">
          <Link to="/">Повернутись на головну сторінку</Link>
        </p>
      </Col>
    </Row>
  );
}
