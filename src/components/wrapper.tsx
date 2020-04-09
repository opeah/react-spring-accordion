import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import AccordionContext, { AccordionContextType } from '../context';

const { Provider } = AccordionContext;

export interface WrapperProps {
  allowMultipleOpened?: boolean;
  children:
    | React.ReactNode
    | ((AccordionContext: AccordionContextType) => React.ReactNode);
  onChange?: (openedItems: string | string[]) => void;
}

/**
 *
 * @param allowMultipleOpened
 * @param children
 * @param onChange
 * @constructor
 */

const Wrapper: React.FC<WrapperProps> = ({
  allowMultipleOpened = false,
  children,
  onChange,
}) => {
  const [openedItems, setOpenedItems] = useState<string | string[]>(
    allowMultipleOpened ? [] : ``
  );

  const openElement = useCallback(
    (element: string) => {
      if (allowMultipleOpened) {
        if (typeof openedItems === `object` && openedItems.includes(element)) {
          const newOpenedItems = openedItems?.filter(
            (item) => item !== element
          );
          setOpenedItems(newOpenedItems);
        } else {
          setOpenedItems((openedItems) => [...openedItems, element]);
        }
      } else {
        openedItems === element ? setOpenedItems(``) : setOpenedItems(element);
      }
    },
    [openedItems, setOpenedItems]
  );
  const memoizedContext = useMemo(
    () => ({
      openedItems,
      setOpenedItems,
      openElement,
    }),
    [openedItems, setOpenedItems, openElement]
  );

  const isFirstMount = useRef(true);

  useEffect(() => {
    if (!isFirstMount?.current && onChange) onChange(openedItems);

    isFirstMount.current = false;
  }, [isFirstMount, openedItems]);

  return (
    <Provider value={memoizedContext}>
      {typeof children !== `undefined` && typeof children === `function`
        ? children(memoizedContext)
        : children}
    </Provider>
  );
};

export default React.memo(Wrapper);
