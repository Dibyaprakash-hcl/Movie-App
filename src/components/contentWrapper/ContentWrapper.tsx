import React, { ReactNode, FC } from "react";
import "./style.scss";
interface ContentWrapperProps {
    children: ReactNode;
}
const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
    return <div data-testid="contentWrapper" className="contentWrapper">{children}</div>;
};
export default ContentWrapper;