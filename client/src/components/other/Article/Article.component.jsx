import React from "react";
import { useSelector } from 'react-redux';
import { ArticleWrapper } from "./Article.style";

const Article = ({ children }) => {
    const headerHeight = useSelector(state => state.overlay.headerPxHeight);
    const sidebarWidth = useSelector(state => state.overlay.sidebarPxWidth);
    return (<ArticleWrapper headerHeight={headerHeight} sidebarWidth={sidebarWidth}>
        {children}
    </ArticleWrapper>)
}

export default Article;