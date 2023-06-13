import React from 'react';
import styled from 'styled-components';

type TGradient = {
    children: React.ReactNode;
};

const GradientContainer = styled.main`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(140deg, var(--light-blue) 0%, var(--purple) 50%);
`;

export const Gradient = ({ children }: TGradient) => {
    return <GradientContainer>{children}</GradientContainer>;
};
