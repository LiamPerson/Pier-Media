import InputGroup from "../../templates/Input/InputGroup.component";
import React from "react";
import { InputButtonContainer, SidebarDownloadInputWrapper } from "./SidebarDownloadInput.style";

const SidebarDownloadInput = () => {
    return (<SidebarDownloadInputWrapper>
        <InputGroup placeholder="URL"/>
        <InputButtonContainer>
            <input type="button" value="audio"/>
            <input type="button" value="video"/>
        </InputButtonContainer>
    </SidebarDownloadInputWrapper>);
}

export default SidebarDownloadInput;