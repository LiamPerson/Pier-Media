import styled from "styled-components";
import style from "../../../settings/style.json";

const getIconPath = icon => {
    return `/images/icons/${icon}.svg`;
}

export const InputWrapper = styled.div`
  background-color: ${style.color["dark-2"]};
  box-shadow: 0 0 5px 0 inset ${style.color["dark-1"]};
  border: 1px solid ${style.color["dark-4"]};
  color: ${style.color["light-3"]};
  border-radius: 5px;
  margin: 10px 10px;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.svg`
  background: url(${props => getIconPath(props.icon)}) no-repeat;
  background-position: center;
  background-size: contain;
  filter: invert(60%);
  width: 20px;
  height: 20px;
  margin: 0 8px;
  padding: 0;
`;

export const Input = styled.input`
  color: ${style.color["light-3"]};
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
  height: 100%;
  
  :focus,
  :focus-visible {
    outline:none;
  }
`;