import styled from 'styled-components'

export const ArticleWrapper = styled.div`
    padding-top: calc(${props => props.headerHeight + "px"} + 15px);
    padding-left: calc(${props => props.sidebarWidth + "px"} + 15px);
    padding-right: 15px;
`;