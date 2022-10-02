import styled from "styled-components";
import style from '../../../settings/style.json';

export const HeaderContainer = styled.div`
  background-color: ${style.color["dark-3"]};
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  //justify-content: space-between;
  //align-items: center;
  margin: 0;
  padding: 0;
`;

export const PierLogo = styled.img.attrs({
    src: "/logo192.png"
})`
  width: 36px;
  height: 36px;
  margin: 7px;
`;

