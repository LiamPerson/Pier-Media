import React from "react";
import { useSelector } from "react-redux";
import { ArticleWrapper } from "./Article.style";

const Article = ({ children }) => {
    const sidebarIsMinimised = useSelector(state => state.overlay.sidebarMinimised);
    return (<ArticleWrapper $minimised={sidebarIsMinimised}>
        {children}
    </ArticleWrapper>)
}

export default Article;