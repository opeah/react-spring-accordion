import React from 'react';

import Wrapper, { WrapperProps } from './components/wrapper';
import Item, { ItemProps } from './components/item';
import Heading, { HeadingProps } from './components/heading';
import Child, { ChildProps } from './components/child';

import useAccordionContext from './helpers/useAccordionContext';

const Accordion: {
  Wrapper: React.NamedExoticComponent<WrapperProps>;
  Item: React.NamedExoticComponent<ItemProps>;
  Heading: React.NamedExoticComponent<HeadingProps>;
  Child: React.NamedExoticComponent<ChildProps>;
} = Object.assign({}, {}, { Wrapper, Item, Heading, Child });

export { useAccordionContext };

export default Accordion;
