import { React } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <Navbar variant="light">
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/form-items">Form.Items</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/form-selects">Form.Selects</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
