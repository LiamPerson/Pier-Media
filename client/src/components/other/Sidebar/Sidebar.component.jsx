import React from "react";
import { SideBarContainer, MainMenu, MenuItem } from "./Sidebar.style";
import SidebarDownloadInput from "./SidebarDownloadInput.component";
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const Sidebar = () => {

    const sidebarIsMinimised = useSelector(state => state.overlay.sidebarMinimised);
    const { pathname } = useLocation();

    return (<SideBarContainer $minimised={sidebarIsMinimised}>
        <MainMenu>
            <MenuItem location={pathname} $minimised={sidebarIsMinimised} to="/" icon="home">Home</MenuItem>
            <MenuItem location={pathname} $minimised={sidebarIsMinimised} to="/movie" icon="movie">Movies</MenuItem>
            <MenuItem location={pathname} $minimised={sidebarIsMinimised} to="/video" icon="video">Videos</MenuItem>
            <MenuItem location={pathname} $minimised={sidebarIsMinimised} to="/music" icon="music">Music</MenuItem>
            <MenuItem location={pathname} $minimised={sidebarIsMinimised} to="/file" icon="file">Files</MenuItem>
            <MenuItem location={pathname} $minimised={sidebarIsMinimised} to="/browse" icon="folder">Browse</MenuItem>
        </MainMenu>
        <SidebarDownloadInput minimised={sidebarIsMinimised} />
    </SideBarContainer>)
}

export default Sidebar;