import React from "react";
import {HeaderContainer, PierLogo} from "./Header.style";
import InputGroup from "../../templates/Input/InputGroup.component";

const Header = () => {
    return (<HeaderContainer>
        <PierLogo />
        <InputGroup icon="search" placeholder="Search"/>
        <div></div>
    </HeaderContainer>)
}

export default Header;