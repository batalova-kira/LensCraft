import { AboutHeaderText, AboutHeaderWrapper } from "../About/styled";
import { ServicesGallery } from "../ServicesGallery/ServicesGallery";

export const Services = (): JSX.Element => {
    return (
        <section id="services">
            <AboutHeaderWrapper>
                <AboutHeaderText>SERVICES</AboutHeaderText>
                <AboutHeaderText>
                WHAT WE CAN OFFER YOU
                </AboutHeaderText>
            </AboutHeaderWrapper>
            <ServicesGallery />
        </section>
    );
};
