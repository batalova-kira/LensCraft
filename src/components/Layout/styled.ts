import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const Container = styled.div`
padding: 0px 16px;

@media only screen and (min-width: ${breakpoints.large}) {
        padding: 0px 120px;
    }
`