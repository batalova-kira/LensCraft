import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-width: ${breakpoints.medium}) {
    }
`;

export const ContactsTextContainer = styled.div`
    width: 100%;
    height: 100px; /* висота контейнера */
    position: relative;
    overflow: hidden; /* обрізаємо зайвий текст */

    
`;

export const ContactsText = styled.p`
margin: 16px 0px;

    font-weight: 700;
    font-size: 100px;
    line-height: 1.1;
    white-space: nowrap;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Вирівнює текст по центру */
    
    text-shadow: -1px -1px 0 ${(p) => p.theme.colors.textSecondary},
        1px -1px 0 ${(p) => p.theme.colors.textSecondary},
        -1px 1px 0 ${(p) => p.theme.colors.textSecondary},
        1px 1px 0 ${(p) => p.theme.colors.textSecondary};
    color: ${(p) => p.theme.colors.background};
    
    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 120px;
    }
`;
