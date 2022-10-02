import styled from "styled-components";

 export const TooltipContainer = styled.div`
    white-space: pre-wrap;
    pointer-events: none;

    z-index: 1;
    font-size: 15px;
    line-height: 20px;
    padding: 5px 15px;
    border-radius: 15px;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0;
    transition: 0.2s;
    box-sizing: content-box;
`;