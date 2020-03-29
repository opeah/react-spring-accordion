import React, { useContext } from 'react';
import { useSpring, animated as a } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ResizeObserver as polyfill } from '@juggle/resize-observer';

import AccordionContext, { AccordionContextType } from '../context';

export interface ChildProps {
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

const Child: React.FC<ChildProps> = ({ children, className, style, uid }) => {
  const { openedItems } = useContext<AccordionContextType>(AccordionContext);
  const [ref, { height }] = useMeasure({ polyfill });

  const collapse = useSpring({
    maxHeight: openedItems.includes(uid || ``) ? `${height}px` : `0px`,
    overflow: `hidden`,
  });

  return (
    <a.div style={collapse}>
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    </a.div>
  );
};

export default React.memo(Child);
