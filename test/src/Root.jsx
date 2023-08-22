import { React } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Header from './Header';

import './styles.scss';

function Root() {
  return (
    <Container fluid>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Root;
