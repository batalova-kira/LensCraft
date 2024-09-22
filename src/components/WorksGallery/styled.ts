import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const WorksSection = styled.div`
  margin-bottom: 8px;

    @media only screen and (min-width: ${breakpoints.medium}) {
    margin-bottom: 36px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
    margin-bottom: 40px;
    }
  `

export const WorksCardsContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  `

export const WorkCardWrapper = styled.div<{ $isExpanded: boolean }>`
  width: 343px;
  height: ${({ $isExpanded }) => ($isExpanded ? '334px' : '132px')}; /* Загальна висота в закритому стані більше */
  overflow: hidden;
  transition: height 0.4s ease-in-out;
  border: 1px solid ${(p) => p.theme.colors.borderAccent};
  cursor: pointer;
   display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    width: 100%;
    height: auto;
    align-items: flex-start;
    }
`;

export const WorkCardHeaderContainer = styled.div`
  padding: 24px 29px;
  flex: 1;

  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top:auto;
    margin-bottom:auto;
    padding: 42px 16px;
    }
`; 

export const WorkCardHeader = styled.h2<{ $isExpanded: boolean }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.default};
  margin-bottom: ${({ $isExpanded }) => ($isExpanded ? '8px' : 'none')};

  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 20px;
    margin-bottom: ${({ $isExpanded }) => ($isExpanded ? '32px' : 'none')};
    }

    @media only screen and (min-width: ${breakpoints.large}) {
    font-size: 24px;
    margin-bottom: ${({ $isExpanded }) => ($isExpanded ? '40px' : 'none')};
    }
`;

export const WorkCardContent = styled.p<{ $isExpanded: boolean }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.default}; 

  opacity: ${({ $isExpanded }) => ($isExpanded ? '1' : '0')};
  height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '0')}; 
  transition: opacity 0.4s ease-in-out;

    @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 16px;
    }
`;

export const PictureWrapper = styled.div`
  position: relative; /* Додаємо позиціонування для контейнера */
  overflow: hidden; /* Сховати все, що виходить за межі */

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(p) => p.theme.colors.blackFilter}; 
    filter: grayscale(1); 
    opacity: 0.7; 
    pointer-events: none; /* Не блокувати взаємодію з зображенням */
  }
`;

export const WorkCardImage = styled.img<{ $isExpanded: boolean }>`
display: block;
  width: 100%;
  height: ${({ $isExpanded }) => ($isExpanded ? '225px' : '66px')}; /* Висота зображення */
  object-fit: cover;
  object-position: top; 
  
  transition: height 0.4s ease-in-out;

  @media only screen and (min-width: ${breakpoints.medium}) {
        flex: 1;
      width: 383px;
      height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '113px')}; /* Висота автоматично вирівнюється */
    }

    @media only screen and (min-width: ${breakpoints.large}) {
      width: 600px;
      height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '113px')}; /* Висота автоматично вирівнюється */
    }
`;