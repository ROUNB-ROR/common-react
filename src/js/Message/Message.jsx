import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';

import './styles.scss';

export default function Message(props) {
  //
  const { header, text } = props;

  const headerElement = (
    <p className="message-in-page text-center">
      {
        // Splitting text on lines, adding unique key and the forming the text
        header
          .split('\n')
          .map((str, index) => ({ line: str, key: index }))
          .map((item) => (
            <span key={item.key}>
              {item.line}
              <br />
            </span>
          ))
      }
    </p>
  );

  let textElement = '';
  if (text) {
    textElement = (
      <p className="text-center">
        {
          // Splitting text on lines, adding unique key and the forming the text
          text
            .split('\n')
            .map((str, index) => ({ line: str, key: index }))
            .map((item) => (
              <span key={item.key}>
                {item.line}
                <br />
              </span>
            ))
        }
      </p>
    );
  }

  return (
    <Col xs="12" className="pb-2">
      { headerElement }
      { textElement }
    </Col>
  );
}

Message.defaultProps = {
  text: '',
};

Message.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string,
};
