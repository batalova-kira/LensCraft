import { AboutGallery } from "../AboutGallery/AboutGallery";
import { AboutHeaderText, AboutHeaderWrapper, AboutText, AboutTextWrapper, AboutTitle, GridBackground } from "./styled";
import { FC, useState } from "react";

export const About: FC = (): JSX.Element => {
    const [backgroundImage, setBackgroundImage] = useState<string>(''); 
    const [selectedCard, setSelectedCard] = useState<number | null>(null); 
  
    return (
      <section id="about">
        <AboutHeaderWrapper>
          <AboutHeaderText>About</AboutHeaderText>
          <AboutHeaderText>WHAT YOU NEED TO KNOW ABOUT PHOENIX</AboutHeaderText>
        </AboutHeaderWrapper>
        <GridBackground $backgroundImage={backgroundImage}>
          <AboutTitle>WE ARE A PHOTOGRAPHY STUDIO</AboutTitle>
          <AboutTextWrapper>
            <AboutText>WE TAKE DELIGHT IN TELLING BEAUTIFUL STORIES WITH EVERY SHOT WE TAKE</AboutText>
            <AboutText>EVERY SHOT WE DON’T TAKE IS A STORY WE MISS TELLING</AboutText>
          </AboutTextWrapper>
        </GridBackground>
        <AboutGallery 
          setBackgroundImage={setBackgroundImage} 
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </section>
    );
  };
