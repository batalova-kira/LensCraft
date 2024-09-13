import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const AboutHeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

padding: 13px 0px;
`;

export const AboutHeaderText = styled.h3`
font-weight: 400;
font-size: 10px;
line-height: 1.1;

text-transform: uppercase;
color: ${(p) => p.theme.colors.textAccent};

// Для мобільних пристроїв
@media only screen and (max-width: 767px) {
    max-width: 124px; 
    word-wrap: break-word; 
  }

  @media only screen and (min-width: ${breakpoints.medium})  {
    font-weight: 600;
    font-size: 14px;
    max-width: none; 
  }
`;

export const GridBackground = styled.div`
  width: 100%;
  height: 310px;
  padding: 24px 0px;
  // Сітка
  background-image: 
    linear-gradient(${(p) => p.theme.colors.textAccent} 1px, transparent 1px),
    linear-gradient(90deg, ${(p) => p.theme.colors.textAccent} 1px, transparent 1px);
  
  background-size: 48px 48px;

  @media only screen and (min-width: ${breakpoints.medium})  {
    background-size: 96px 96px;
  }
`;

export const AboutTitle = styled.h3`
font-weight: 600;
font-size: 32px;
line-height: 1.1;
text-transform: uppercase;

color: ${(p) => p.theme.colors.textSecondary};

@media only screen and (max-width: 767px) {
    max-width: 249px; 
    word-wrap: break-word; 
  }

  @media only screen and (min-width: ${breakpoints.medium})  {
    max-width: none; 
  }
`;