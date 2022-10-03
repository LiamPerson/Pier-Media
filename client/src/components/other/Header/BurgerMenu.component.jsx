import React, {useRef} from "react";
import {BurgerMenuIcon} from "./BurgerMenu.style";
import {SideBarYtDl} from "../Sidebar/SideBarYtDlContainer.style";

let menuVisible = false;

export const toggleMainMenu =() => {
    const sideBar = document.getElementById('SideBar');
    sideBar.style.display = menuVisible ? "flex" : "none";
    menuVisible = !menuVisible;
}

const BurgerMenu = () => {
    return (<BurgerMenuIcon onClick={toggleMainMenu}></BurgerMenuIcon>)
}

export default BurgerMenu;

