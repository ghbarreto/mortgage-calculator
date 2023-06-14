import React from 'react';
import styled from 'styled-components';

const StyledContainerBody = styled.section`
    background-color: var(--container-background);
    box-shadow: inset 0 7px 5px rgb(var(--light-blue-rgb), 0.5);
`;

type TContainerBody = {
    children: React.ReactNode;
};

export const ContainerBody = ({ children }: TContainerBody) => {
    return <StyledContainerBody data-testid="container-body">{children}</StyledContainerBody>;
};
