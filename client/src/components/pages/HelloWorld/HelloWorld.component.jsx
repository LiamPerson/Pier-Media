import React from "react";
import useTooltipPositioner from "../../../hooks/useTooltipPositioner.hook";
import { Button } from "../../templates/Button/Button.style";
import Tooltip from "../../templates/Tooltip/Tooltip.component";
import { HelloWorldContainer } from "./HelloWorld.style";

const HelloWorld = () => {

    const [buttonRef, tooltipPositioner] = useTooltipPositioner();
    
    return (<HelloWorldContainer>
        <div>
            Hello, world! 
            <Button ref={buttonRef} color="">Sample Button</Button>
            <Tooltip position={tooltipPositioner}>Deez nuts</Tooltip>
        </div>
    </HelloWorldContainer>)
}

export default HelloWorld;