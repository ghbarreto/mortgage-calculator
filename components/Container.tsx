import React from 'react';
import styled from 'styled-components';

type TContainer = {
    children: React.ReactNode;
};

const StyledSection = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90%;
    width: 90%;

    @media (min-width: 900px) {
        max-width: 1000px;
    }
`;

export const Container = ({ children }: TContainer) => {
    return <StyledSection>{children}</StyledSection>;
};
