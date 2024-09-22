import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import HeroBtn from "../../assets/icons/hero-btn.svg";

export const ServicesGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 16px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        flex-direction: row;
        gap:36px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
    
        gap:54px;
    }
`;

export const ServicesTitlesContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 223px;
    margin-bottom: 38px;

    @media only screen and (min-width: ${breakpoints.medium}) {
      width: 240px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
      width: 267px;
    }
`;

export const ServicesHeader = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 1;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.textSecondary};
`;

export const ServicesLogo = styled(HeroBtn)`
    width: 80px;
    height: 80px;

    margin: 35px 0px;
    margin-right: auto;
    margin-left: auto;
`;
export const ServicesTitle = styled.h2`
    margin-bottom: 16px;

    font-weight: 300;
    font-size: 16px;
    line-height: 1.3;
    color: ${(p) => p.theme.colors.textSecondary};
`;

export const ServicesImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        flex-direction: row;
        flex-wrap:wrap;
    }
`;

export const ServicesImageWrapper = styled.div<{ $isHovered: boolean }>`
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    max-width: 343px;
    line-height: 0;

    img {
        display: block;
        width: 100%;
        height: auto;

        transition: filter 0.3s ease-in-out, brightness 0.3s ease-in-out,
            saturation 0.3s ease-in-out;
        object-fit: cover;
    }

    /* При наведенні зображення стає більш насиченим і яскравішим */
    ${({ $isHovered }) =>
        $isHovered &&
        `
    img {
      filter: brightness(1.3) saturate(1.5); /* Підвищуємо яскравість і насиченість */
    }
  `}

@media only screen and (min-width: ${breakpoints.medium}) {
      max-width: 246px;
    }

@media only screen and (min-width: ${breakpoints.large}) {
      max-width:440px;
    }
`;
