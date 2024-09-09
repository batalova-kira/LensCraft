import { ILayout } from "../../common/types/layout";
import { TopBar } from "../TopBar/TopBar";

const Layout = ({ children }: ILayout): JSX.Element => {
    return (
        <>
            <TopBar />
            {children}
        </>
    );
};

export default Layout;
