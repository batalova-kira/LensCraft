import { FC } from "react";
import { AboutHeaderText, AboutHeaderWrapper } from "../About/styled";
import {
    AddressFooterContainer,
    ContactsContainer,
    ContactsText,
    ContactsTextContainer,
    EmailLink,
    FooterLink,
    FooterLinksList,
    LogoFooter,
    SocialMediaContainer,
    SocialMediaItem,
    SocialMediaList,
    TextAddressFooter,
} from "./styled";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { LogoText, LogoWrapper } from "../TopBar/styled";
import LogoIcon from "../../assets/icons/logo.svg";

export const Contacts: FC = (): JSX.Element => {
    return (
        <ContactsContainer id="contacts">
            <AboutHeaderWrapper>
                <AboutHeaderText>CONTACT</AboutHeaderText>
                <AboutHeaderText>
                    WE MAKE IT EASY FOR YOU TO GET IN TOUCH WITH US
                </AboutHeaderText>
            </AboutHeaderWrapper>
            <ContactsTextContainer>
                <ContactsText>LET`S WORK TOGETHER</ContactsText>
            </ContactsTextContainer>
            <SocialMediaContainer>
                <EmailLink href="mailto:hello@lenscraft.com">
                    hello@lenscraft.com
                </EmailLink>
                <SocialMediaList>
                    <SocialMediaItem>
                        <a href="https://facebook.com/">
                            <FaFacebookF className="icon" />
                        </a>
                    </SocialMediaItem>
                    <SocialMediaItem>
                        <a href="https://x.com/">
                            <FaXTwitter className="icon" />
                        </a>
                    </SocialMediaItem>
                    <SocialMediaItem>
                        <a href="https://instagram.com/">
                            <FaInstagram className="icon" />
                        </a>
                    </SocialMediaItem>
                    <SocialMediaItem>
                        <a href="https://youtube.com/">
                            <RiYoutubeLine className="icon" />
                        </a>
                    </SocialMediaItem>
                </SocialMediaList>
            </SocialMediaContainer>
            <AddressFooterContainer>
                <LogoFooter>
                    <LogoWrapper>
                        <LogoIcon />
                        <LogoText>LensCraft</LogoText>
                    </LogoWrapper>
                    <TextAddressFooter>
                        1071 5th AVE, NEW YORK
                    </TextAddressFooter>
                    <TextAddressFooter>+91 02228501044</TextAddressFooter>
                </LogoFooter>
                <FooterLinksList>
                    <FooterLink>
                        <a href="#home">Home</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="#about">About</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="#works">Works</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="#services">Services</a>
                    </FooterLink>
                </FooterLinksList>
            </AddressFooterContainer>
        </ContactsContainer>
    );
};
