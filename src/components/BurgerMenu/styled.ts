import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledBurgerMenu = styled(motion.div)`
   width: 16px; /* Розмір бургер-меню */
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  div {
    width: 100%;
    height: 2px; /* Товщина ліній */
    background-color: #000;
    border-radius: 1px;
    position: absolute;
    transition: all 0.3s ease;
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;