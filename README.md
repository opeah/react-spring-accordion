# React Spring Accordion

Accordion based on [react-spring](https://github.com/react-spring/react-spring)

## Install

```
yarn add react-spring-accordion
```

## Usage

### Basic

```
import Accordion from 'react-spring-accordion';

const Foo = () => (
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

const Foo = () => (
  <Accordion.Wrapper allowMultipleOpened>
    <Accordion.Item>
      <Accordion.Heading>Heading</Accordion.Heading>
      <Accordion.Child>Child</Accordion.Child>
    </Accordion.Item>
  </Accordion.Wrapper>
)
```

### onChange

```
import Accordion from 'react-spring-accordion';

const Foo = () => (
  <Accordion.Wrapper onChange={openedItems => console.log(openedItems)}>
    <Accordion.Item>
      <Accordion.Heading>Heading</Accordion.Heading>
      <Accordion.Child>Child</Accordion.Child>
    </Accordion.Item>
  </Accordion.Wrapper>
)
```

## Todo

- Accessibility