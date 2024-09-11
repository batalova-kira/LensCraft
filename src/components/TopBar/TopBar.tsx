import { FC } from "react";
import LogoIcon from "../../assets/icons/logo.svg";
import { HeaderWrapper, LogoText, LogoWrapper } from "./styled";

export const TopBar: FC = (): JSX.Element => {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <LogoIcon />
                <LogoText>LensCraft</LogoText>
            </LogoWrapper>
            <nav>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
        </HeaderWrapper>
    );
};
