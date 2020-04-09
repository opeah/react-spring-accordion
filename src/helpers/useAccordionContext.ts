import { useContext } from 'react';

import AccordionContext, { AccordionContextType } from '../context';

const useAccordionContext = () =>
  useContext<AccordionContextType>(AccordionContext);

export default useAccordionContext;
