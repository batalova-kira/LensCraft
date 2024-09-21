import { AboutHeaderText, AboutHeaderWrapper } from "../About/styled";
import { WorksSection } from "../WorksGallery/styled";
import { WorksList } from "../WorksGallery/WorksGallery";

export const Works = (): JSX.Element => {
    return (
        <WorksSection id="works">
            <AboutHeaderWrapper>
                <AboutHeaderText>WORKS</AboutHeaderText>
                <AboutHeaderText>
                    OUR FINEST WORKS ON DISPLAY FOR YOUR PERUSAL
                </AboutHeaderText>
            </AboutHeaderWrapper>
            <WorksList />
        </WorksSection>
    );
};
