import styled, { css } from "styled-components";

export const SidebarDownloadInputWrapper = styled.div`
  position: static;
  bottom: 0;
  ${props => props.$minimised && css` display: none; `}
`;

export const InputGroupContainer = styled.div`
  height: 40px;
  margin: 0 5px;
`;

export const InputButtonContainer = styled.div`
    margin: 10px;
    display:flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-evenly;
`;