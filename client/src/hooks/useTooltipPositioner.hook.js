import { useEffect, useState } from "react";
import { usePopper } from "react-popper";

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

/**
 * Returns the refs required to position a tooltip dynamically to an element.
 * For use with Tooltip component in `/src/components/templates/Tooltip`. 
 * @note Tooltips should ALWAYS be BELOW the object it is tooltipping.
 * @returns {[RefSetter, {popper: RefSetter, arrow: RefSetter, styles: Object, attributes: Object}]} 
 * @example 
 * const [buttonRef, tooltipPosition] = useTooltipPositioner();
 * return (<>
 *  <button ref={buttonRef} active={false}>Fight</button>
 *  <Tooltip position={tooltipPosition}>You don't have the required level to fight.</Tooltip>
 * </>)
 */
const useTooltipPositioner = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
      placement: 'top',
    });

    
    useEffect(() => {
      if(!referenceElement || !popperElement) return;
      const handleShow = () => {
        popperElement.style.opacity = 1;
        if(update) update();

      }
      const handleHide = () => {
        popperElement.style.opacity = 0;
        if(update)  update();

      }

      for(const showEvent of showEvents)
        referenceElement.addEventListener(showEvent, handleShow);
      for(const hideEvent of hideEvents)
        referenceElement.addEventListener(hideEvent, handleHide);

      // Clear event listeners on renewal of useEffect
      return () => {
        for(const showEvent of showEvents)
          referenceElement.removeEventListener(showEvent, handleShow);
        for(const hideEvent of hideEvents)
          referenceElement.removeEventListener(hideEvent, handleHide);
      } 
    }, [referenceElement, popperElement, update]);
    
    return [setReferenceElement, {popper: setPopperElement, arrow: setArrowElement, styles, attributes}];
}

export default useTooltipPositioner;