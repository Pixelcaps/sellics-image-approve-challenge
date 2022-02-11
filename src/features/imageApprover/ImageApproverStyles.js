import styled from "styled-components";
import { device } from '../../styles';

export const ImageApproverContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const ImageRecommendation = styled.div`
    border-radius: 10px;

    @media ${device.mobile} { 
        max-width: 300px;
        max-height: 300px;
    }

    @media ${device.tablet} { 
        max-width: 300px;
        max-height: 300px;
    }

    @media ${device.laptop} { 
        max-width: 400px;
    }

    @media ${device.desktop} {
        max-width: 400px;
    }
`;

export const RecommendedImageContainer = styled.div`
    border-radius: 10px;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;


    @media ${device.mobile} { 
        max-width: 300px;
        max-height: 300px;
    }

    @media ${device.tablet} { 
        max-width: 300px;
        max-height: 300px;
    }

    @media ${device.laptop} { 
        max-width: 400px;
    }

    @media ${device.desktop} {
        max-width: 400px;
    }
`;

export const InitialNoImageContainer = styled.div`
    border-radius: 10px;
    background-color: #dfdfdf;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobile} { 
        max-width: 300px;
        max-height: 300px;
    }

    @media ${device.tablet} { 
        max-width: 300px;
        max-height: 300px;
    }

    @media ${device.laptop} { 
        max-width: 400px;
    }

    @media ${device.desktop} {
        max-width: 400px;
    }

`;