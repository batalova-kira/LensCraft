import styled from "styled-components";

export const WorkCardWrapper = styled.div<{ $isExpanded: boolean }>`
  width: 343px;
  height: ${({ $isExpanded }) => ($isExpanded ? '225px' : '110px')};
  overflow: hidden;
  transition: height 0.4s ease-in-out;
  border: 1px solid ${(p) => p.theme.colors.borderAccent};
  cursor: pointer;
`;

export const WorkCardHeaderContainer = styled.div`
  padding: 24px 29px;
`; 

export const WorkCardHeader = styled.h2<{ $isExpanded: boolean }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.default};
  margin-bottom: ${({ $isExpanded }) => ($isExpanded ? '8px' : 'none')};
`;

export const WorkCardContent = styled.p<{ $isExpanded: boolean }>`
font-weight: 400;
font-size: 12px;

line-height: 1.3;
text-transform: uppercase;
color: ${(p) => p.theme.colors.default}; 

  opacity: ${({ $isExpanded }) => ($isExpanded ? '1' : '0')};
  height: ${({ $isExpanded }) => ($isExpanded ? 'auto' : '0')}; 
  transition: opacity 0.4s ease-in-out;
`;

export const WorkCardImage = styled.img<{ $isExpanded: boolean }>`
  width: 100%;
  height: ${({ $isExpanded }) => ($isExpanded ? '225px' : '180px')};
  object-fit: cover;
  transition: height 0.4s ease-in-out;
`;