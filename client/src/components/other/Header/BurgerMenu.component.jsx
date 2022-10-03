import React from "react";
import { BurgerMenuIcon } from "./BurgerMenu.style";
import store from '../../../redux/store';
import { setSidebarMinimised } from "../../../redux/overlayReducer";
import { useSelector } from "react-redux";

const BurgerMenu = () => {
    const open = useSelector(state => state.overlay.sidebarMinimised);
    const handleClick = () => {
        store.dispatch(setSidebarMinimised(!open))
    }
    return <BurgerMenuIcon onClick={handleClick} />
}

export default BurgerMenu;

