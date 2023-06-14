import styled from 'styled-components';
import { Text } from '../components';

export const StyledContainer = styled.div`
    padding: 50px 25px;
`;

export const StyledText = styled(Text)`
    margin-top: 7px;
`;

export const StyledSection = styled.section`
    display: block;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const StyledLeftSide = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 400px;
    }
`;

export const StyledRightSide = styled.div`
    margin-top: 20px;
`;

export const StyledErrors = styled.span`
    color: salmon;
`;
