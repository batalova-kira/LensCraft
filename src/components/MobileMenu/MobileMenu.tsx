import { IMobileMenuProps } from "../../common/types/topbar";
import { StyledMobileMenu } from "./styled";
import { FC } from "react";

export const MobileMenu: FC<IMobileMenuProps> = ({ isOpen, toggle }) => {
    return (
        <StyledMobileMenu
            initial={{ opacity: 0, y: -50 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
        >
            <li>
                <a href="#home" onClick={toggle}>
                    Home
                </a>
            </li>
            <li>
                <a href="#about" onClick={toggle}>
                    About
                </a>
            </li>
            <li>
                <a href="#works" onClick={toggle}>
                    Works
                </a>
            </li>
            <li>
                <a href="#services" onClick={toggle}>
                    Services
                </a>
            </li>
            <li>
                <a href="#contacts" onClick={toggle}>
                    Contacts
                </a>
            </li>
        </StyledMobileMenu>
    );
};
