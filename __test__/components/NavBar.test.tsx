import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavBar } from '../../components';
import '@testing-library/jest-dom';

describe('it should render the navbar correctly', () => {
    it('should render the alt text', () => {
        render(<NavBar />);
        expect(screen.getByAltText('produce8 Logo')).toBeTruthy();
    });

    it('should render the hamburger menu ', () => {
        render(<NavBar />);
        expect(screen.getByTestId('hamburger-menu')).toBeTruthy();
    });
});
