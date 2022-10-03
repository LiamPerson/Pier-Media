import styled from "styled-components";

export const SidebarDownloadInputWrapper = styled.div`
  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 420px) {
    display: block;
  }
`;

export const InputButtonContainer = styled.div`
    margin: 0 10px 10px 10px;
    display:flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-evenly;
`;