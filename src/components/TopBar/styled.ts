import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const LogoText = styled.h3`
font-weight: 600;
font-size: 12px;
text-align: center;
color: ${(p) => p.theme.colors.default};

@media only screen and (min-width: ${breakpoints.medium}) {
        /* padding: 0px 120px; */
    }
`

export const LogoWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
align-items:center;
gap: 4px;

svg{
    fill: ${(p) => p.theme.colors.default}
}
/* 
@media only screen and (min-width: ${breakpoints.medium}) {
        padding: 0px 120px;
    } */
`
export const HeaderWrapper = styled.header`
display:flex;
flex-direction:row;
justify-content:space-between;
padding: 16px 0px;

@media (max-width: 767px) {
    nav ul {
      display: none;
    }
  }

@media only screen and (min-width: ${breakpoints.medium}) {
        padding: 35px 0px;
    }
`

export const LinkListWrapper = styled.ul`
display:flex;
flex-direction:row;
list-style: none; 
gap:4px;
margin: 0;
/* 
@media only screen and (min-width: ${breakpoints.medium}) {
        padding: 0px 120px;
    } */
`

