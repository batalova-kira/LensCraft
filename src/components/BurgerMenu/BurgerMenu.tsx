import { IBurgerMenuProps } from "../../common/types/topbar";
import { motion } from "framer-motion";
import { StyledBurgerMenu } from "./styled";

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ isOpen, toggle }) => {
    return (
        <StyledBurgerMenu onClick={toggle} whileTap={{ scale: 0.9 }}>
            {/* Верхня лінія */}
            <motion.div
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
            />
            {/* Середня лінія */}
            <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ y: 6 }}
            />
            {/* Нижня лінія */}
            <motion.div
                animate={isOpen ? { rotate: -45, y: 5 } : { rotate: 0, y: 12 }}
                transition={{ duration: 0.3 }}
            />
        </StyledBurgerMenu>
    );
};
