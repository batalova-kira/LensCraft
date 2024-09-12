import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ArrowBtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:16px;
  margin-right: auto;
`;

export const ArrowButton = styled.button`
display: flex;
justify-content: center;
align-items: center;

  color: ${(p) => p.theme.colors.default};
  border: 1px solid ${(p) => p.theme.colors.default}; 
  width:32px;
  height: 32px;
  border-radius:50%;

  :hover, :focus {
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  width: 343px;
  height: 205px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    width: 1200px;
    height: 915px;
  }
`;


export const ImageWrapper = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ExpandButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.7);
  padding: 5px 10px;
  cursor: pointer;
  border: none;
`;

export const ExtraImagesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const ExtraImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;