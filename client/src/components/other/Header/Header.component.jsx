import React from "react";
import {BurgerMenuWrapper, HeaderContainer, PierLogo} from "./Header.style";
import InputGroup from "../../templates/Input/InputGroup.component";
import BurgerMenu from "./BurgerMenu.component";

const Header = () => {
    return (<HeaderContainer>
        <PierLogo />
        <InputGroup icon="search" placeholder="Search"/>
        <BurgerMenuWrapper>
            <BurgerMenu />
        </BurgerMenuWrapper>
    </HeaderContainer>)
}

export default Header;