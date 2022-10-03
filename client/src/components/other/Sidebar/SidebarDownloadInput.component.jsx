import InputGroup from "../../templates/Input/InputGroup.component";
import React from "react";
import { InputButtonContainer, InputGroupContainer, SidebarDownloadInputWrapper } from "./SidebarDownloadInput.style";
import { Button } from "../../templates/Button/Button.style";

const SidebarDownloadInput = ({ minimised }) => {
    return (<SidebarDownloadInputWrapper $minimised={minimised}>
        <InputGroupContainer>
            <InputGroup icon="planet" placeholder="URL"/>
        </InputGroupContainer>
        <InputButtonContainer>
            <Button>Audio</Button>
            <Button>Video</Button>
        </InputButtonContainer>
    </SidebarDownloadInputWrapper>);
}

export default SidebarDownloadInput;