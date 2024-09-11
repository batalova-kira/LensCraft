import { FC, useState } from "react";
import LogoIcon from "../../assets/icons/logo.svg";
import {
    HeaderWrapper,
    LinkListWrapper,
    LogoText,
    LogoWrapper,
} from "./styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const TopBar: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderWrapper>
            <LogoWrapper>
                <LogoIcon />
                <LogoText>LensCraft</LogoText>
            </LogoWrapper>
            <nav>
                <LinkListWrapper>
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
                </LinkListWrapper>
            </nav>
            <BurgerMenu isOpen={isOpen} toggle={toggleMenu} />
            {isOpen && <MobileMenu isOpen={isOpen} toggle={toggleMenu} />}
        </HeaderWrapper>
    );
};
