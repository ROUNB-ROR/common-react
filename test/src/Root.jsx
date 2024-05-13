import { React } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import JumpToContentButton from '../../src/components/JumpToContentButton';

import Header from './Header';

import './styles.scss';

function Root() {
  return (
    <Container fluid>
      <JumpToContentButton />
      <Header />
      <Outlet />
    </Container>
  );
}

export default Root;
