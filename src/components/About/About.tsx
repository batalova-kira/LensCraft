import { AboutHeaderText, AboutHeaderWrapper, AboutTitle, GridBackground } from "./styled";

export const About = (): JSX.Element => {
    return (
        <section id="about">
            <AboutHeaderWrapper>
            <AboutHeaderText>About</AboutHeaderText>
            <AboutHeaderText>WHAT YOU NEED TO KNOW ABOUT PHOENIX</AboutHeaderText>
            </AboutHeaderWrapper>
            <GridBackground>
                <AboutTitle>WE ARE A PHOTOGRAHY STUDIO</AboutTitle>
                <div></div>
            </GridBackground>
        </section>
    );
};
