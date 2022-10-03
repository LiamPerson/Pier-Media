import styled from "styled-components";

export const getIconPath = icon => {
    return `/images/ion-icons/${icon}.svg`;
}

export const Icon = styled.i`
    background: url(${props => getIconPath(props.icon)}) no-repeat;
    background-position: center;
    background-size: contain;
    filter: invert(60%);
    width: 20px;
    height: 20px;
    margin: 0 0 0 8px;
    padding: 0;
`