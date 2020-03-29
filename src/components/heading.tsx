import React, { useCallback, useContext } from 'react';

import AccordionContext, { AccordionContextType } from '../context';

export interface HeadingProps {
  children: React.ReactNode;
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
  uid,
}) => {
  const { openElement } = useContext<AccordionContextType>(AccordionContext);

  const toggleOpen = useCallback(() => uid && openElement(uid), [openElement]);

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
      {children}
    </button>
  );
};

export default React.memo(Heading);
