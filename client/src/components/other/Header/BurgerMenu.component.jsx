import React from "react";
import { BurgerMenuIcon, BurgerMenuWrapper } from "./BurgerMenu.style";
import store from '../../../redux/store';
import { setSidebarShown } from "../../../redux/overlayReducer";
import { useSelector } from "react-redux";

const BurgerMenu = () => {
    const shown = useSelector(state => state.overlay.sidebarShown);
    const handleClick = () => {
        store.dispatch(setSidebarShown(!shown))
    }
    return (<BurgerMenuWrapper onClick={handleClick}>
        <BurgerMenuIcon></BurgerMenuIcon>
    </BurgerMenuWrapper>)
}

export default BurgerMenu;

