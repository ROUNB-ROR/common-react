import { React } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { Form } from '../../../src/components/index';

export default function FormItems() {
  const validationErrors = null;

  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  if (month < 10) month = `0${month}`;
  let day = today.getDate();
  if (day < 10) day = `0${day}`;
  const date1Value = `${year}-${month}-${day}`;

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
        <Form.Check
          name="female"
          displayName="Жінка?"
          horizontal
          errors={validationErrors}
        />
        <Form.Check
          name="checkedCheckBox"
          displayName="Checked"
          checked
          horizontal
          errors={validationErrors}
        />
      </Col>
      <Col xs={12}>
        { /* Date */}
        <Form.Item
          name="date1"
          displayName="Дата (сьогоднішня):"
          value={date1Value}
          type="date"
          horizontal
          errors={validationErrors}
        />
      </Col>
      <Col xs={12}>
        { /* Files */}
        <Form.Item
          name="files1"
          displayName="Файли:"
          type="file"
          horizontal
          multiple
          errors={validationErrors}
          onChange={(t) => console.log(t)}
        />
      </Col>
      <Col xs={12}>
        <h1>Порожні label'и</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>Книги</th>
              <th>Електронні видання</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Item name="table_books" value="0" type="number" errors={validationErrors} />
              </td>
              <td>
                <Form.Item name="table_ebooks" value="0" type="number" errors={validationErrors} />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
