import React from "react";
import {MenuItemLink} from "./MenuItem.style";
import {Link} from "react-router-dom";

const MenuItem = ({ route, icon, title }) => {
    return (<MenuItemLink>
        <Link to={route}>
            <img src={"images/icons/" + icon + ".svg"} alt={icon} />
            <span>{title}</span>
        </Link>
    </MenuItemLink>)
}

export default MenuItem;