import { FC } from "react";
import { ILayout } from "../../common/types/layout";
import { TopBar } from "../TopBar/TopBar";
import { Container } from "./styled";

const Layout: FC<ILayout> = ({ children }): JSX.Element => {
    return (
        <Container>
            <TopBar />
            {children}
        </Container>
    );
};

export default Layout;
