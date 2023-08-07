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
  const { response } = error;
  if (response) {
    const { status } = response;
    // Custom messages from some codes
    switch (status) {
      // Not Found
      case 404: {
        errorText = 'Такий ресурс не знайдено.\nСпробуйте перевірити посилання.';
        break;
      }
      // Conflict
      case 409: {
        errorText = 'Даний запит неможливий так як викликає конфлікт';
        break;
      }
      // Too Many Requests
      case 429: {
        errorText = 'Вибачте, однак Ви здійснили занадто багато запитів за короткий проміжок часу. Спробуйте зачекати та оновити сторінку знову';
        break;
      }
      default: {
        break;
      }
    }
  }

  // Component
  const navigate = useNavigate();
  return (
    <Row as="main" className="flex-grow-1 align-items-center">
      <Col className="text-center">
        <Row>
          <Message header="Помилка!" text={errorText} />
        </Row>
        <Row className="mt-5">
          <Col xs={12} className="d-flex justify-content-center">
            <Button onClick={() => navigate(-1)}>Назад</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} className="d-flex justify-content-center">
            <p>
              <Link to="/">Повернутись на головну сторінку</Link>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
