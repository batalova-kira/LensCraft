import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ArrowButton = styled.button`
  cursor: pointer;
  margin: 10px;
  background: none;
  border: none;
  font-size: 2rem;
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

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto; // Для мобільних пристроїв зображення адаптується
  }
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