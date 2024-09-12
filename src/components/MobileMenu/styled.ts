import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMobileMenu = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;

  position: fixed; /* Зміна на fixed для фіксації на екрані */
  top: 0;
  right: 0;
  height: 100vh; /* Займає всю висоту екрану */
  width: 300px; /* Ширина меню */

  padding: 100px 30px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1); /* Тінь з лівої сторони */
  border-radius: 0; /* Займає всю праву частину екрану, тому без скруглень */
  background: ${(p) => p.theme.colors.default}; 
  z-index: 100;
a{
  color: ${(p) => p.theme.colors.background};
 
}
  
  
`;