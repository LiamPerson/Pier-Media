import styled from "styled-components";
import style from '../../../settings/style.json';

export const MenuItemLink = styled.div`
  margin:0;
  padding:0;
  display:flex;
  flex-flow: row;
  
  a {
    border-bottom: 1px dotted ${style.color["dark-5"]};
    margin: 0;
    padding: 0.5em 2.5em 0.5em 1.5em;
    color: ${style.color["light-2"]};
    text-decoration: none;
    font-size: 1.2em;
    display:flex;
    flex-flow: row;
    align-items: center;
    width:100%;
  }

  a:hover {
    background-color: ${style.color["dark-5"]};
    padding: 0.5em 2.4em 0.5em 1.6em;
  }
  
  img {
    height: 1em;
    width: 1em;
    padding: 0;
    margin: 0 0.5em 0 0;
    filter: invert(80%);
  }

  @media screen and (max-width: 820px) {
    a {
      padding: 0.5em 1.5em 0.5em 1.5em;
    }

    a:hover {
      padding: 0.5em 1.4em 0.5em 1.6em;
    }
    
    img {
      margin: 0;
    }

    span {
      display: none;
    }
  }
  
  @media screen and (max-width: 420px) {
    img {
      margin: 0 0.5em 0 0;
    }

    span {
      display: inline;
    }
  }
`;

