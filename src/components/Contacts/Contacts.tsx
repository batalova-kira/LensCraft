import { AboutHeaderText, AboutHeaderWrapper } from "../About/styled";
import { ContactsContainer, ContactsText, ContactsTextContainer } from "./styled";

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
            <div>
            <a href="mailto:hello@lenscraft.com">hello@lenscraft.com</a>
            </div>
        </ContactsContainer>
    );
};
