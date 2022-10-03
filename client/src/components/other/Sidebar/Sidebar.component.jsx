import React from "react";
import { SideBarContainer, MainMenu, MenuItem } from "./Sidebar.style";
import SidebarDownloadInput from "./SidebarDownloadInput.component";
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const sidebarIsMinimised = useSelector(state => state.overlay.sidebarMinimised);

    return (<SideBarContainer $minimised={sidebarIsMinimised}>
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