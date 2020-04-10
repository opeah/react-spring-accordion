import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './src';

const App = () => {
  return (
    <Accordion.Wrapper>
      <Accordion.Item>
        <Accordion.Heading>
          {(open) => <div>{open ? `open` : `close`}</div>}
        </Accordion.Heading>
        <Accordion.Child>Child</Accordion.Child>
      </Accordion.Item>
    </Accordion.Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById(`root`));
