# React Spring Accordion

Accordion based on [react-spring](https://github.com/react-spring/react-spring)

## Install

```
yarn add react-spring-accordion
```
or
```
npm install react-spring-accordion
```

## Usage

### Basic

```
import Accordion from 'react-spring-accordion';

const App = () => (
  <Accordion.Wrapper>
    <Accordion.Item>
      <Accordion.Heading>Heading</Accordion.Heading>
      <Accordion.Child>Child</Accordion.Child>
    </Accordion.Item>
  </Accordion.Wrapper>
)
```

### Allow multiple opened

```
import Accordion from 'react-spring-accordion';

const App = () => (
  <Accordion.Wrapper allowMultipleOpened>
    <Accordion.Item>
      <Accordion.Heading>Heading</Accordion.Heading>
      <Accordion.Child>Child</Accordion.Child>
    </Accordion.Item>
  </Accordion.Wrapper>
)
```

### useAccordionContext

```
import Accordion, { useAccordionContext } from 'react-spring-accordion';

const App = () => {
  const { openedItems, setOpenedItems, openElement } = useAccordionContext();

  return (
    <Accordion.Wrapper>
      <Accordion.Item>
        <Accordion.Heading>Heading</Accordion.Heading>
        <Accordion.Child>Child</Accordion.Child>
      </Accordion.Item>
    </Accordion.Wrapper>
  )
}
```

### Access all methods within Wrapper

```
import Accordion from 'react-spring-accordion';

const App = () => (
  <Accordion.Wrapper>
    {({ openedItems, setOpenedItems, openElement }) => (
      <Accordion.Item>
        <Accordion.Heading>Heading</Accordion.Heading>
        <Accordion.Child>Child</Accordion.Child>
      </Accordion.Item>
    )}
  </Accordion.Wrapper>
)
```

### onChange

```
import Accordion from 'react-spring-accordion';

const App = () => (
  <Accordion.Wrapper onChange={openedItems => console.log(openedItems)}>
    <Accordion.Item>
      <Accordion.Heading>Heading</Accordion.Heading>
      <Accordion.Child>Child</Accordion.Child>
    </Accordion.Item>
  </Accordion.Wrapper>
)
```

### Access computed value 'open' in Heading or Child

```
import Accordion from 'react-spring-accordion';

const App = () => (
  <Accordion.Wrapper onChange={openedItems => console.log(openedItems)}>
    <Accordion.Item>
      <Accordion.Heading>
        {open => <div>{open ? `Open` : `Close`}</div>}
      </Accordion.Heading>
      <Accordion.Child>
        {open => <div>{open ? `Open` : `Close`}</div>}
      </Accordion.Child>
    </Accordion.Item>
  </Accordion.Wrapper>
)
```

## Todo

- Accessibility