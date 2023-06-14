import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButtons } from '../../components';
import '@testing-library/jest-dom';

describe('it should render the radio buttons correctly', () => {
    it('should render the period key', () => {
        render(<RadioButtons onChange={jest.fn()} />);
        expect(screen.getByText('Period')).toBeTruthy();
    });

    it('should render the 20 years radio button', () => {
        render(<RadioButtons onChange={jest.fn()} />);
        expect(screen.getByText(/20 Years/)).toBeTruthy();
    });

    it('should render the 25 years radio button', () => {
        render(<RadioButtons onChange={jest.fn()} />);
        expect(screen.getByText(/25 Years/)).toBeTruthy();
    });

    it('should render the 30 years radio button', () => {
        render(<RadioButtons onChange={jest.fn()} />);
        expect(screen.getByText(/30 Years/)).toBeTruthy();
    });

    it('should have the correct color', () => {
        const component = render(<RadioButtons onChange={jest.fn()} />);
        expect(component.getByText(/20 Years/)).toHaveStyle('color: var(--dark-purple);');
    });

    it('should have the correct color', () => {
        const component = render(<RadioButtons onChange={jest.fn()} />);
        expect(component.getByText(/25 Years/)).toHaveStyle('color: var(--dark-purple);');
    });

    it('should have the correct color', () => {
        const component = render(<RadioButtons onChange={jest.fn()} />);
        expect(component.getByText(/20 Years/)).toHaveStyle('color: var(--dark-purple);');
    });
});
