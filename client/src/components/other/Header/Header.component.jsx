import React from "react";
import { HeaderContainer, PierLogo } from "./Header.style";
import InputGroup from "../../templates/Input/InputGroup.component";
import BurgerMenu from "./BurgerMenu.component";

const Header = () => {
    return (<HeaderContainer>
        <PierLogo />
        <InputGroup icon="search" placeholder="Search"/>
        <BurgerMenu />
    </HeaderContainer>)
}

export default Header;