import React from "react";
import useTooltipPositioner from "../../../hooks/useTooltipPositioner.hook";
import { Button } from "../../templates/Button/Button.style";
import { Spinner } from "../../templates/Loader/Loader.style";
import { PageContainer } from "../../templates/PageContainer/PageContainer.style";
import Tooltip from "../../templates/Tooltip/Tooltip.component";
import { HelloWorldContainer } from "./HelloWorld.style";

const HelloWorld = () => {

    const [buttonRef, tooltipPositioner] = useTooltipPositioner();
    
    return (<PageContainer>
        <HelloWorldContainer>
            <div>
                Hello, world! 
                <Button ref={buttonRef} color="">Sample Button</Button>
                <Tooltip position={tooltipPositioner}>Deez nuts</Tooltip>
            </div>
            <div style={{display: "grid"}}>
                <div style={{background: "red"}}>asd</div>
                <div style={{background: "yellow"}}>asd</div>
                <div style={{background: "green"}}>asd</div>
            </div>
            <Spinner />
        </HelloWorldContainer>
    </PageContainer>)
}

export default HelloWorld;