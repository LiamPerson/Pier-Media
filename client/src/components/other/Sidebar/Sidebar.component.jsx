import React, { useEffect, useRef } from "react";
import { SideBarContainer, MainMenu } from "./Sidebar.style";
import SidebarDownloadInput from "./SidebarDownloadInput.component";
import { useSelector } from 'react-redux';
import OverlayHandler from "../../../utils/OverlayHandler";
import { MenuItem } from "./MenuItem.style";

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
    return (<SideBarContainer headerHeight={headerHeight} ref={ref} $minimised={sidebarIsMinimised}>

        <MainMenu>
            <MenuItem to="/" icon="home">Home</MenuItem>
            <MenuItem to="/movie" icon="movie">Movies</MenuItem>
            <MenuItem to="/video" icon="video">Videos</MenuItem>
            <MenuItem to="/music" icon="music">Music</MenuItem>
            <MenuItem to="/file" icon="file">Files</MenuItem>
            <MenuItem to="/browse" icon="folder">Browse</MenuItem>
        </MainMenu>

        <SidebarDownloadInput />

    </SideBarContainer>)
}

export default Sidebar;