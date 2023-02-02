import styled from "styled-components";

export const StyledContainer = styled.div`
    padding: 0 15px;
`;

export const StyledHeader = styled.h1`
    color: red;
    @media (min-width: 630px) {
        margin-top: 55px;
    }
    @media (min-width: 800px) {
        margin-top: 20px;
    }
`;

export const StyledImgRight = styled.img`
    float: right;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const StyledParagraph = styled.p`
    @media (max-width: 800px) {
        display: none;
    }
`;

export const StyledParagraphRed = styled.p`
    color: red;
`;

export const StyledPrice = styled.span`
    color: red;
    font-size: 32px;
    font-weight: 700;
`;
