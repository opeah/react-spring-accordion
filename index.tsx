import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './src';

const App = () => (
  <Accordion.Wrapper>
    {({ openedItems, setOpenedItems, openElement }) => (
      <Accordion.Item>
        <Accordion.Heading>Heading</Accordion.Heading>
        <Accordion.Child>Child</Accordion.Child>
      </Accordion.Item>
    )}
  </Accordion.Wrapper>
);

ReactDOM.render(<App />, document.getElementById(`root`));
