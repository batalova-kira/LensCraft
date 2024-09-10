import { ILayout } from "../../common/types/layout";
import { TopBar } from "../TopBar/TopBar";
import { Container } from "./styled";

const Layout = ({ children }: ILayout): JSX.Element => {
    return (
        <Container>
            <TopBar />
            {children}
        </Container>
    );
};

export default Layout;
