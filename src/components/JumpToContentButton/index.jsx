import React from 'react';

import Button from 'react-bootstrap/Button';

import styles from './index.module.scss';

//
export default function JumpToContentButton() {
  // Component
  return (
    <Button className={styles.button} as="a" href="#content">Перейти до вмісту</Button>
  );
}
