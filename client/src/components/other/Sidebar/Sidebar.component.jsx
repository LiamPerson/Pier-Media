import React from "react";
import {SideBar, MainMenu} from "./Sidebar.style";
import MenuItem from "./MenuItem.component";
import InputGroup from "../../templates/Input/InputGroup.component";
import SideBarYtDlContainer from "./SideBarYtDlContainer.component";

const Sidebar = () => {
    return (<SideBar id="SideBar">

        <MainMenu>
            <MenuItem route="/movie" icon="movie" title="Movies" />
            <MenuItem route="/video" icon="video" title="Videos" />
            <MenuItem route="/music" icon="music" title="Music" />
            <MenuItem route="/file" icon="file" title="Files" />
            <MenuItem route="/browse" icon="folder" title="Browse" />
        </MainMenu>

        <SideBarYtDlContainer/>

    </SideBar>)
}

export default Sidebar;