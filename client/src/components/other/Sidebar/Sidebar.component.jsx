import React, { useEffect, useRef } from "react";
import { SideBarContainer, MainMenu, MenuItem } from "./Sidebar.style";
import SidebarDownloadInput from "./SidebarDownloadInput.component";
import { useSelector } from 'react-redux';
import OverlayHandler from "../../../utils/OverlayHandler";

const Sidebar = () => {

    const shown = useSelector(state => state.overlay.sidebarShown);
    const headerHeight = useSelector(state => state.overlay.headerHeight);
    const sidebarIsMinimised = useSelector(state => state.overlay.sidebarMinimised);
    
    const ref = useRef();
    useEffect(() => {
        if(!ref.current) return;
        OverlayHandler.setSidebarElement(ref.current);
    }, [ref]);

    if(!shown) return null;
    return (<SideBarContainer headerHeight={headerHeight} ref={ref}>

        <MainMenu>
            <MenuItem $minimised={sidebarIsMinimised} to="/" icon="home">Home</MenuItem>
            <MenuItem $minimised={sidebarIsMinimised} to="/movie" icon="movie">Movies</MenuItem>
            <MenuItem $minimised={sidebarIsMinimised} to="/video" icon="video">Videos</MenuItem>
            <MenuItem $minimised={sidebarIsMinimised} to="/music" icon="music">Music</MenuItem>
            <MenuItem $minimised={sidebarIsMinimised} to="/file" icon="file">Files</MenuItem>
            <MenuItem $minimised={sidebarIsMinimised} to="/browse" icon="folder">Browse</MenuItem>
        </MainMenu>

        <SidebarDownloadInput />

    </SideBarContainer>)
}

export default Sidebar;