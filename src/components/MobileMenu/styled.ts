import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMobileMenu = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #fff;
  padding: 100px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;