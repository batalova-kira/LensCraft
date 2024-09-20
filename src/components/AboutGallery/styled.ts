import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const AboutGalleryWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    gap:8px;

    padding: 12px 5px;
    margin-bottom: 8px;
    
    background: ${(p) => p.theme.colors.backgroundAbout};

    @media only screen and (min-width: ${breakpoints.medium}) {
        padding: 20px 5px;
        margin-bottom: 36px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        padding: 40px 12px;
        margin-left:-14px;
        margin-right:-14px;
        margin-bottom: 108px;
    }
`;

export const AboutPictureWrapper = styled.div<{ $isSelected: boolean }>`
  position: relative;
  cursor: pointer;
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
  transform: ${({ $isSelected }) => ($isSelected ? 'translateY(-20px)' : 'translateY(0)')};
    
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: auto;
    width:50px;
    height:50px;

    @media only screen and (min-width: ${breakpoints.medium}) {
        width:115px;
        height:115px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width:200px;
        height:200px;
    }
  }
`;