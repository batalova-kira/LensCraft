import { FC } from "react";
import LogoIcon from "../../assets/icons/logo.svg";
import { LogoText } from "./styled";

export const TopBar: FC = (): JSX.Element => {
    return (
        <header>
            <div>
                <LogoIcon />
                <LogoText>LensCraft</LogoText>
            </div>
        </header>
    );
};
