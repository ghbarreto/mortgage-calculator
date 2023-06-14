import React, { useState } from 'react';
import styled from 'styled-components';

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HamburgerContainer onClick={toggleMenu} data-testid="hamburger-menu">
            <HamburgerBar />
            <HamburgerBar />
            <HamburgerBar />
        </HamburgerContainer>
    );
};

const HamburgerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

const HamburgerBar = styled.div`
    width: 100%;
    height: 3px;
    background-color: var(--base-color);
    margin-bottom: 4px;
    border-radius: 15px;

    &:last-child {
        margin-bottom: 0;
    }
`;
