import { FC, useState } from "react";
import LogoIcon from "../../assets/icons/logo.svg";
import {
    HeaderWrapper,
    InputBtnWrapper,
    LinkListWrapper,
    LogoText,
    LogoWrapper,
} from "./styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { MdModeNight, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../hooks";
import { lightTheme } from "../../theme/themes";

export const TopBar: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

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
                <InputBtnWrapper onClick={toggleTheme}>
                    {theme === lightTheme ? (
                        <MdOutlineLightMode />
                    ) : (
                        <MdModeNight />
                    )}
                </InputBtnWrapper>
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
