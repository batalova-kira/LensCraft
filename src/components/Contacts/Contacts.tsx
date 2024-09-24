import { AboutHeaderText, AboutHeaderWrapper } from "../About/styled";
import {
    ContactsContainer,
    ContactsText,
    ContactsTextContainer,
    SocialMediaContainer,
    SocialMediaItem,
    SocialMediaList,
} from "./styled";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGooglePlusG,
} from "react-icons/fa";

export const Contacts = (): JSX.Element => {
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
                <a href="mailto:hello@lenscraft.com">hello@lenscraft.com</a>
            
                    <SocialMediaList>
                        <SocialMediaItem>
                            <a href="https://www.facebook.com/">
                                <FaFacebookF className="icon"/>
                            </a>
                        </SocialMediaItem>
                        <SocialMediaItem>
                            <a href="#">
                                <FaTwitter className="icon"/>
                            </a>
                        </SocialMediaItem>
                        <SocialMediaItem>
                            <a href="#">
                                <FaLinkedinIn className="icon"/>
                            </a>
                        </SocialMediaItem>
                        <SocialMediaItem>
                            <a href="#">
                                <FaGooglePlusG className="icon"/>
                            </a>
                        </SocialMediaItem>
                    </SocialMediaList>
                
            </SocialMediaContainer>
        </ContactsContainer>
    );
};
