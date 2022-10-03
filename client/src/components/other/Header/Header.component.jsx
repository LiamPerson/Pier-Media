import React from "react";
import { HeaderContainer, InputGroupWrapper, LogoContainer, LogoTitle, PierLogo } from "./Header.style";
import InputGroup from "../../templates/Input/InputGroup.component";
import BurgerMenu from "./BurgerMenu.component";

const Header = () => (
    <HeaderContainer>
        <LogoContainer>
            <BurgerMenu />
            <PierLogo />
            <LogoTitle>Pier</LogoTitle>
        </LogoContainer>
        <InputGroupWrapper>
            <InputGroup icon="search" placeholder="Search"/>
        </InputGroupWrapper>
    </HeaderContainer>
)

export default Header;