import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import HeroBtn from "../../assets/icons/hero-btn.svg";

export const ServicesGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 16px;
    margin-bottom: 8px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        align-items: start;
        flex-direction: row;

        gap:36px;
        margin-bottom: 24px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        gap:54px;}
`;

export const ServicesTitlesContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 223px;
    margin-bottom: 38px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        min-width: 223px;
        margin-bottom: 0px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width: 267px;
    }
`;

export const ServicesHeader = styled.h2`
    font-size: 20px;

    @media only screen and (max-width: ${breakpoints.beforeMedium}),
        only screen and (min-width: ${breakpoints.large}) {
        font-weight: 600;
        font-size: 32px;
        line-height: 1;
        text-transform: uppercase;
        color: ${(p) => p.theme.colors.textSecondary};
    }
`;

export const ServicesLogo = styled(HeroBtn)`
    width: 50px;
    height: 50px;
    margin: 16px 0px;

    @media only screen and (max-width: ${breakpoints.beforeMedium}),
        only screen and (min-width: ${breakpoints.large}) {
        width: 80px;
        height: 80px;

        margin: 35px 0px;
        margin-right: auto;
        margin-left: auto;
    }
`;
export const ServicesTitle = styled.h2`

    font-size: 12px;

 &:not(:last-child) {
    margin-bottom: 12px; 
  }

    &:hover {
        cursor: pointer;
        color: ${(p) => p.theme.colors.primary};
    }

    @media only screen and (max-width: ${breakpoints.beforeMedium}),
        only screen and (min-width: ${breakpoints.large}) {
        margin-bottom: 16px;

        font-weight: 300;
        font-size: 16px;
        line-height: 1.3;
        color: ${(p) => p.theme.colors.textSecondary};
    }
`;

export const ServicesImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Рівномірно розподіляємо зображення */
    gap: 0; /* Прибираємо відстань між зображеннями */


    @media only screen and (min-width: ${breakpoints.medium}) {
        justify-content: flex-end;
    }
`;

export const ServicesImageWrapper = styled.div<{ $isHovered: boolean }>`
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    line-height: 0;
    width: 100%;
    max-width: 100%; /* Спочатку зображення займають всю ширину */

    &:hover {
        cursor: pointer;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
        transition: filter 0.3s ease-in-out, brightness 0.3s ease-in-out,
            saturation 0.3s ease-in-out;
        object-fit: cover;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 50%; /* Кожне зображення займає 50% ширини, щоб було по 2 в ряд */
        max-width: 50%; 
        /* max-width: 295px;  */
    }

    /* @media only screen and (min-width: ${breakpoints.large}) {
        max-width: 440px; 
    } */

    ${({ $isHovered }) =>
        $isHovered &&
        `
    img {
      filter: brightness(1.3) saturate(1.5);
    }
  `}
`;
