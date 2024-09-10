import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const LogoText = styled.h3`
font-weight: 600;
font-size: 12px;
text-align: center;
color: ${(p) => p.theme.colors.default};

@media only screen and (min-width: ${breakpoints.medium}) {
        padding: 0px 120px;
    }
`