import React, { useEffect, useRef } from "react";
import { HeaderContainer, PierLogo } from "./Header.style";
import InputGroup from "../../templates/Input/InputGroup.component";
import BurgerMenu from "./BurgerMenu.component";
import OverlayHandler from "../../../utils/OverlayHandler";

const Header = () => {
    
    const ref = useRef();
    useEffect(() => {
        if(!ref.current) return;
        OverlayHandler.setHeaderElement(ref.current);
    }, [ref]);


    return (<HeaderContainer ref={ref}>
        <PierLogo />
        <InputGroup icon="search" placeholder="Search"/>
        <BurgerMenu />
    </HeaderContainer>)
}

export default Header;