import styled from "styled-components";
import style from '../../../settings/style.json';

/**
 * Gets the background or text colour of a specific style
 * @param {("info" | "warning" | "danger")} color 
 * @param {Boolean} text 
 * @returns {String}
 */
const switchColor = (color, text = false) => {
    /**
     * Gets the text part of the color.
     * @param {String} _baseString 
     * @param {Boolean} _text 
     */
    const _getText = (_baseString, _text = false) => {
        return _text ? _baseString + "_text" : _baseString;
    }
    if(!color) return style.color[_getText("primary", text)];
    switch(color) {
        case "info":
            return style.color[_getText("info", text)];
        case "warning":
            return style.color[_getText("warning", text)];
        case "danger":
            return style.color[_getText("danger", text)];
        default: 
            throw Error(`Error in Button.style: trying to find color${text ? "_text" : ""} without definition: (${color}) `);
    }
}

export const Button = styled.button.attrs({
    type: "button"
})`
    border-radius: 15px;
    border: 1px solid gray;
    background: ${props => switchColor(props.color)};
    color: ${props => switchColor(props.color, true)};
    &:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }
    &:active {
        filter: brightness(.9);
    }
`;