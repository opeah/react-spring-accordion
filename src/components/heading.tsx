import React, { useCallback, useContext, useMemo } from 'react';

import AccordionContext, { AccordionContextType } from '../context';

export interface HeadingProps {
  children: React.ReactNode | ((open: boolean) => React.ReactNode);
  className?: string;
  style?: {};
  uid?: string;
}

/**
 *
 * @param children
 * @param className
 * @param style
 * @param uid
 * @constructor
 */

const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  style,
  uid = ``,
}) => {
  const { openElement, openedItems } = useContext<AccordionContextType>(
    AccordionContext
  );

  const toggleOpen = useCallback(() => openElement(uid), [openElement]);

  const open = useMemo(() => openedItems?.includes(uid), [openedItems, uid]);

  return (
    <button
      onClick={toggleOpen}
      className={className}
      style={{
        appearance: `none`,
        backgroundColor: `transparent`,
        border: 0,
        ...style,
      }}
    >
      {typeof children === `function` ? children(open) : children}
    </button>
  );
};

export default React.memo(Heading);
