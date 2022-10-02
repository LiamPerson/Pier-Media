import React from "react";
import { TooltipContainer } from "./Tooltip.style";

/**
 * A tooltip for use with `useTooltipPositioner.hook` in `/src/hooks/useTooltipPositioner.hook.js`
 * @note Tooltips should ALWAYS be BELOW the object it is tooltipping.
 * @example 
 * const [buttonRef, tooltipPosition] = useTooltipPositioner();
 * return (<>
 *  <button ref={buttonRef} active={false}>Fight</button>
 *  <Tooltip position={tooltipPosition}>You don't have the required level to fight.</Tooltip>
 * </>)
 */
const Tooltip = ({ children, position }) => (
    <TooltipContainer ref={position.popper} style={position.styles.popper} {...position.attributes.popper}>
        {children}
        <div ref={position.arrow} style={position.styles.arrow} />
    </TooltipContainer>
)

export default Tooltip;