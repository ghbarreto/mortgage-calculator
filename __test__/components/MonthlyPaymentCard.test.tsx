import React from 'react';
import { render, screen } from '@testing-library/react';
import { MonthlyPaymentCard } from '../../components/MonthlyPaymentCard';
import '@testing-library/jest-dom';

describe('it should render the MonthlyPaymentCard correctly', () => {
    it('should render the  MonthlyPaymentCard value', () => {
        render(<MonthlyPaymentCard submit={jest.fn()} isLoading={false} value={10_000} />);
        expect(screen.getByText('10000')).toBeTruthy();
    });

    it('should render the  MonthlyPaymentCard title', () => {
        render(<MonthlyPaymentCard submit={jest.fn()} isLoading={false} value={10_000} />);
        expect(screen.getByText('Your total monthly payments will be')).toBeTruthy();
    });

    it('should render the  MonthlyPaymentCard dollar sign', () => {
        render(<MonthlyPaymentCard submit={jest.fn()} isLoading={false} value={10_000} />);
        expect(screen.getByText('$')).toBeTruthy();
    });

    it('should render the  MonthlyPaymentCard spinner', () => {
        render(<MonthlyPaymentCard submit={jest.fn()} isLoading={true} value={10_000} />);
        expect(screen.getByTestId('spinner-is-loading')).toBeTruthy();
    });

    it('should render the  MonthlyPaymentCard /month', () => {
        render(<MonthlyPaymentCard submit={jest.fn()} isLoading={false} value={10_000} />);
        expect(screen.getByText('/month')).toBeTruthy();
    });

    it('should render the  MonthlyPaymentCard button', () => {
        render(<MonthlyPaymentCard submit={jest.fn()} isLoading={false} value={10_000} />);
        expect(screen.getByText('Apply Today')).toBeTruthy();
    });
});
