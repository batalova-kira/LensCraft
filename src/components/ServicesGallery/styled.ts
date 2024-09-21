import styled from "styled-components";

export const ServicesGalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ServicesTitlesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ServicesTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ServicesImagesContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Розташування по 4 картки */
  gap: 20px;
`;

export const ServicesImageWrapper = styled.div<{ $isHovered: boolean }>`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
  }

  /* При наведенні збільшуємо картинку */
  ${({ $isHovered }) =>
    $isHovered &&
    `
    transform: scale(1.1);

    img {
      transform: scale(1.1);
    }
  `}
`;