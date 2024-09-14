import { AboutHeaderText, AboutHeaderWrapper, AboutText, AboutTextWrapper, AboutTitle, GridBackground } from "./styled";
import { FC } from "react";

export const About: FC = (): JSX.Element => {
    return (
        <section id="about">
            <AboutHeaderWrapper>
            <AboutHeaderText>About</AboutHeaderText>
            <AboutHeaderText>WHAT YOU NEED TO KNOW ABOUT PHOENIX</AboutHeaderText>
            </AboutHeaderWrapper>
            <GridBackground>
                <AboutTitle>WE ARE A PHOTOGRAPHY STUDIO</AboutTitle>
                <AboutTextWrapper>
                    <AboutText>WE TAKE DELIGHT IN TELLING BEAUTIFUL STORIES WITH EVERY SHOT WE TAKE</AboutText>
                    <AboutText>EVERY SHOT WE DON’T TAKE IS A STORY WE MISS TELLING</AboutText>
                </AboutTextWrapper>
            </GridBackground>
            <div>
                
            </div>
        </section>
    );
};
