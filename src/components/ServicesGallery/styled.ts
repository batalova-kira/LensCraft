import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const ServicesGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  
  @media only screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ServicesTitlesContainer = styled.div`
   display: flex;
  flex-direction: column;

  width: 219px;
  /* Заголовки один за одним без відступів */
  /* h2 {
    margin-bottom: 10px;
  } */

  @media only screen and (min-width: ${breakpoints.medium}) {
    flex: 1;
    h2 {
      margin-bottom: 20px; /* Відступи між заголовками тільки на великих екранах */
    }
  }
`;

export const ServicesHeader = styled.h2`
margin-bottom: 35px;

  font-weight: 600;
font-size: 32px;
line-height: 1;
text-transform: uppercase;
color: ${(p) => p.theme.colors.textSecondary};
`;

export const ServicesTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ServicesImagesContainer = styled.div`
   display: grid;
  grid-template-columns: 1fr; /* Для мобільних — одна колонка */
  margin-bottom: 8px;

  @media only screen and (min-width:  ${breakpoints.medium}) {
    flex: 1;
    grid-template-columns: repeat(2, 1fr); /* Для десктопів — 2 колонки */
    margin-bottom: 24px;
  }
`;

export const ServicesImageWrapper = styled.div<{ $isHovered: boolean }>`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  img {
    display: block;
    width: 100%;
    height: auto;
    transition: filter 0.3s ease-in-out, brightness 0.3s ease-in-out, saturation 0.3s ease-in-out;
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
`;