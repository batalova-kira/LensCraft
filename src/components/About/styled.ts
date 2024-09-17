import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import { IGridBackgroundProps } from "../../common/types/about";

export const AboutHeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

padding: 13px 0px;

@media only screen and (min-width: ${breakpoints.medium})  {
  padding: 24px 0px;
  } 

@media only screen and (min-width: ${breakpoints.large})  {
  padding: 40px 0px;
  }
`;

export const AboutHeaderText = styled.h3`
font-weight: 400;
font-size: 10px;
line-height: 1.1;

text-transform: uppercase;
color: ${(p) => p.theme.colors.textAccent};

max-width: 124px; 
word-wrap: break-word; 


  @media only screen and (min-width: ${breakpoints.medium})  {
    font-weight: 600;
    font-size: 14px;
    max-width: none; 
  }
`;

export const GridBackground = styled.div<IGridBackgroundProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0px;

  background-color: ${(p) => (p.$backgroundImage ? 'transparent' : p.theme.colors.backgroundBlack)};

  background-image: 
    linear-gradient(${(p) => p.theme.colors.textAccent || '#FF0000'} 1px, transparent 1px), /* Сітка вертикальна */
    linear-gradient(90deg, ${(p) => p.theme.colors.textAccent || '#FF0000'} 1px, transparent 1px), /* Сітка горизонтальна */
    ${(p) => p.$backgroundImage ? `url(${p.$backgroundImage})` : 'none'}; /* Зображення під сіткою */

  background-position: top left, top left, center top; 
  
  background-size: 
    40px 40px, /* Сітка вертикальна */
    40px 40px, /* Сітка горизонтальна */
    cover; /* Зображення заповнює блок */

  // Для великих екранів
  @media only screen and (min-width: ${breakpoints.medium}) {
    background-size: 60px 60px, 60px 60px, cover; 
    padding: 30px 15px 50px 15px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    flex-direction: row;
    justify-content: space-between;
    background-size: 96px 96px, 96px 96px, cover; 
    padding: 50px 30px 100px 30px;
  }
`;
export const AboutTitle = styled.h3`
font-weight: 600;
font-size: 32px;
line-height: 1.1;
text-transform: uppercase;

max-width: 270px; 
word-wrap: break-word; 
margin-bottom: 16px;
  
color: ${(p) => p.theme.colors.textContrast};

@media only screen and (min-width: ${breakpoints.medium})  {
    font-size: 42px;
    line-height: 1.1;

    margin-bottom: 36px;
    max-width: none; 
  }

  @media only screen and (min-width: ${breakpoints.large})  {
    font-weight: 700;
    font-size: 56px;
    line-height: 1;

    margin-bottom: 0;
    max-width: 462px; 
  }
`;

export const AboutTextWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 48px;

@media only screen and (min-width: ${breakpoints.medium})  {
    gap: 30px;
  }

  @media only screen and (min-width: ${breakpoints.large})  {
    gap: 100px;
  }
`;

export const AboutText = styled.p`
font-weight: 300;
font-size: 12px;
text-transform: uppercase;
  
color: ${(p) => p.theme.colors.textContrast};

@media only screen and (min-width: ${breakpoints.medium})  {
    font-size: 14px;
  }

  @media only screen and (min-width: ${breakpoints.large})  {
    max-width: 510px; 
    word-wrap: break-word; 

    font-size: 16px;
    line-height: 1.2;
  }
`;