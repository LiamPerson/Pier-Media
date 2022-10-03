import styled from 'styled-components'

export const ArticleWrapper = styled.div`
    padding-top: var(--header-height);
    padding-left: ${props => props.$minimised ? "var(--sidebar-width-minimised)" : "var(--sidebar-width-default)"};;
`;