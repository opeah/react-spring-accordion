import React, { Dispatch, SetStateAction } from 'react';

export interface AccordionContextType {
  openedItems: string | string[];
  setOpenedItems: Dispatch<SetStateAction<string | string[]>>;
  openElement: (element: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType>({
  openedItems: [],
  setOpenedItems: () => null,
  openElement: () => null,
});

export default AccordionContext;
