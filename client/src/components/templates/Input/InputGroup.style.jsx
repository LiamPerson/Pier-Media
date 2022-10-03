import styled from "styled-components";
import style from "../../../settings/style.json";



export const InputWrapper = styled.div`
  background-color: ${style.color["dark-2"]};
  box-shadow: 0 0 5px 0 inset ${style.color["dark-1"]};
  border: 1px solid ${style.color["dark-4"]};
  color: ${style.color["light-3"]};
  border-radius: 5px;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Input = styled.input`
  color: ${style.color["light-3"]};
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0 0 0 0.5em;
  font-size: 1em;
  width: 100%;
  height: 100%;
  
  :focus,
  :focus-visible {
    outline:none;
  }
`;