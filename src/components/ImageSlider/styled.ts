import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

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
    gap: 16px;

    margin-right: auto;
    margin-bottom: 24px;
`;

export const ArrowButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(p) => p.theme.colors.default};
    border: 1px solid ${(p) => p.theme.colors.default};
    width: 32px;
    height: 32px;
    border-radius: 50%;

    &:hover,
    &:focus {
        color: ${(p) => p.theme.colors.primary};
        border-color: ${(p) => p.theme.colors.primary}; 
    }
`;

export const ImageTitle = styled(motion.h3)`
    margin-right: auto;
    margin-bottom: 4px;

    font-weight: 300;
    font-size: 12px;
    line-height: 1.5;
    color: ${(p) => p.theme.colors.textSecondary};
`;

export const ImageText = styled(motion.h1)`
    margin-right: auto;
    margin-bottom: 16px;

    font-weight: 700;
    font-size: 32px;
    color: ${(p) => p.theme.colors.textSecondary};
`;

export const ImageContainer = styled.div<{ $isExpanded: boolean }>`
    width: 100%;
    width: 343px;
    height: 205px;
    position: relative;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${({ $isExpanded }) => ($isExpanded ? "none" : "60px")};

    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 738px;
        height: 441px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width: 1200px;
        height: 915px;
    }
`;

export const ImageWrapper = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const ExpandButton = styled.button<{ $isExpanded: boolean }>`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);

    /* border-radius: 50%; */
    border-radius: ${({ $isExpanded }) => ($isExpanded ? "30px" : "50%")};
    padding: ${({ $isExpanded }) => ($isExpanded ? "5px 10px" : "none")};

    background: ${({ $isExpanded, theme }) =>
        $isExpanded ? theme.colors.secondaryBackground : "none"};

    svg {
        width: 72px;
        height: 72px;
    }

    cursor: pointer;
    border: none;

    @media only screen and (min-width: ${breakpoints.large}) {
        svg {
            width: 240px;
            height: 240px;
        }
    }
`;

export const ExtraImagesContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

export const ExtraImage = styled.img`
    width: 343px;
    height: 205px;
    object-fit: cover;
    
    @media only screen and (min-width: ${breakpoints.medium}) {
        width: 738px;
        height: 441px;
    }

    @media only screen and (min-width: ${breakpoints.large}) {
        width: 1200px;
        height: 915px;
    }
`;
