import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { HamburgerMenu } from './';

const StyledNav = styled.nav`
    background-color: var(--white);
    margin-top: 0;
`;
const StyledUL = styled.ul`
    display: flex;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;
const StyledLI = styled.li`
    list-style: none;
    margin: 0 15px;
`;

export const NavBar = () => {
    return (
        <StyledNav>
            <StyledUL>
                <StyledLI>
                    <Image src="/p8Wordmark_sm.svg" width={80} height={40} alt="produce8 Logo" />
                </StyledLI>
                <StyledLI>
                    <HamburgerMenu />
                </StyledLI>
            </StyledUL>
        </StyledNav>
    );
};
