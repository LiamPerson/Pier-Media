import React, { useEffect, useRef } from "react";
import { SideBar, MainMenu } from "./Sidebar.style";
import MenuItem from "./MenuItem.component";
import SidebarDownloadInput from "./SidebarDownloadInput.component";
import { useSelector } from 'react-redux';
import OverlayHandler from "../../../utils/OverlayHandler";

const Sidebar = () => {

    const shown = useSelector(state => state.overlay.sidebarShown);
    
    const ref = useRef();
    useEffect(() => {
        if(!ref.current) return;
        OverlayHandler.setSidebarElement(ref.current);
    }, [ref]);

    if(!shown) return null;
    return (<SideBar id="SideBar" ref={ref}>

        <MainMenu>
            <MenuItem route="/movie" icon="movie" title="Movies" />
            <MenuItem route="/video" icon="video" title="Videos" />
            <MenuItem route="/music" icon="music" title="Music" />
            <MenuItem route="/file" icon="file" title="Files" />
            <MenuItem route="/browse" icon="folder" title="Browse" />
        </MainMenu>

        <SidebarDownloadInput/>

    </SideBar>)
}

export default Sidebar;