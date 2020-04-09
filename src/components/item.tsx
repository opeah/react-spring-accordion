import React, { useContext, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccordionContext, { AccordionContextType } from '../context';

export interface ItemProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Item: React.FC<ItemProps> = ({ children, defaultOpen = false }) => {
  const { openElement } = useContext<AccordionContextType>(AccordionContext);
  const uid = useMemo(() => uuidv4(), []);

  useEffect(() => {
    defaultOpen && openElement(uid);
  }, [uid]);

  return (
    <>
      {React?.Children?.map(children, (child) =>
        React.cloneElement(
          // @ts-ignore
          child,
          {
            uid,
          }
        )
      )}
    </>
  );
};

export default React.memo(Item);
