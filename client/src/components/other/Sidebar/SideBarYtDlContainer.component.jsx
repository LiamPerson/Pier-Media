import InputGroup from "../../templates/Input/InputGroup.component";
import React from "react";
import {SideBarYtDl} from "./SideBarYtDlContainer.style";

const SideBarYtDlContainer = () => {
    return (<SideBarYtDl>
        <InputGroup placeholder="URL"/>
        <div>
            <input type="button" value="audio"/>
            <input type="button" value="video"/>
        </div>
    </SideBarYtDl>);
}

export default SideBarYtDlContainer;