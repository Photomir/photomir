import styled from "styled-components";
import cloud from "../../assets/images/cloud.png";
import cloudOverlay from "../../assets/images/cloudOverlay.png";

export const StyledBackground = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    max-height: 170px;
    min-height: 120px;
`;

export const StyledButton = styled.button`
    position: relative;
    background-color: transparent;
    background-image: url(${cloud});
    width: 134px;
    height: 54px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 24px;
    font-weight: 900;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    font-family: sans;
    padding-bottom: 20px;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 134px;
        height: 54px;
        background-image: url(${cloudOverlay});
    }
    @media (max-width: 800px) {
        margin-top: 50px;
    }
    @media (min-width: 800px) {
        margin-top: 100px;
    }
`;

export const StyledFlexBoxCenter = styled.div`
    display: flex;
    justify-content: space-around;
`;
