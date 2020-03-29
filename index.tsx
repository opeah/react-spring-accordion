import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './src';

ReactDOM.render(
  <>
    <Accordion.Wrapper allowMultipleOpened>
      <Accordion.Item>
        <Accordion.Heading>Heading</Accordion.Heading>
        <Accordion.Child>Child</Accordion.Child>
      </Accordion.Item>
    </Accordion.Wrapper>
  </>,
  document.getElementById(`root`)
);
