import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledBurgerMenu = styled(motion.div)<{ isOpen: boolean }>`
   width: 16px; /* Розмір бургер-меню */
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  z-index: 101;
  
  div {
    width: 100%;
    height: 2px; /* Товщина ліній */
     background-color: ${({ theme, isOpen }) =>
            isOpen ? theme.colors.background : theme.colors.default};
    border-radius: 1px;
    position: absolute;
    transition: all 0.3s ease;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    display: none;
  }
`;