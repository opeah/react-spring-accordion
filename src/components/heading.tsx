import React, { useCallback, useContext, useMemo } from 'react';

import AccordionContext, { AccordionContextType } from '../context';

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLDivElement>;
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
    <div
      onClick={toggleOpen}
      className={className}
      style={style}
      tabIndex={0}
    >
      {typeof children === `function` ? children(open) : children}
    </div>
  );
};

export default React.memo(Heading);
