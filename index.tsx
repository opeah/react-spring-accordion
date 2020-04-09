import React from 'react';
import ReactDOM from 'react-dom';

import Accordion, { useAccordionContext } from './src';

const App = () => {
  const context = useAccordionContext();

  return (
    <Accordion.Wrapper>
      {({ openedItems, setOpenedItems }) => (
        <>
          {openedItems}
          <button onClick={() => setOpenedItems([])}>dd</button>
          <Accordion.Item>
            <Accordion.Heading>hello</Accordion.Heading>
            <Accordion.Child>Child</Accordion.Child>
          </Accordion.Item>
        </>
      )}
    </Accordion.Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById(`root`));
