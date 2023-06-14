import React from 'react';
import { render, screen } from '@testing-library/react';
import { Slider } from '../../components';
import '@testing-library/jest-dom';

describe('it should render the Slider correctly', () => {
    it('should render the  Slider title', () => {
        render(
            <Slider
                labelTop={'hello world'}
                min={123}
                max={1234444}
                onChange={jest.fn()}
                value={12354}
                name="principal"
            />
        );
        expect(screen.getByText('hello world')).toBeTruthy();
    });

    it('should render the slider dollar sign', () => {
        render(
            <Slider
                labelTop={'hello world'}
                min={123}
                max={1234444}
                onChange={jest.fn()}
                value={12354}
                name="principal"
            />
        );
        expect(screen.getByText('$')).toBeTruthy();
    });

    it('should render the slider value', () => {
        render(
            <Slider
                labelTop={'hello world'}
                min={123}
                max={1234444}
                onChange={jest.fn()}
                value={12354}
                name="principal"
            />
        );
        expect(screen.getByText('12,354')).toBeTruthy();
    });

    it('should render the min value formatted', () => {
        render(
            <Slider
                labelTop={'hello world'}
                min={123}
                max={1234444}
                onChange={jest.fn()}
                value={12354}
                name="principal"
            />
        );
        expect(screen.getByText('$0.123K')).toBeTruthy();
    });

    it('should render the max value formatted', () => {
        render(
            <Slider
                labelTop={'hello world'}
                min={123}
                max={1234444}
                onChange={jest.fn()}
                value={12354}
                name="principal"
            />
        );
        expect(screen.getByText('$1.2M')).toBeTruthy();
    });

    it('should render the value formatted when annualinterestrate is assigned', () => {
        render(
            <Slider
                labelTop={'hello world'}
                min={123}
                max={1234444}
                onChange={jest.fn()}
                value={12354}
                name="annualInterestRate"
            />
        );
        expect(screen.getByText('12354.0%')).toBeTruthy();
    });

    it('should render the min value formatted when annualinterestrate is assigned', () => {
        render(
            <Slider
                labelTop={'hello world'}
                min={123}
                max={1234444}
                onChange={jest.fn()}
                value={12354}
                name="annualInterestRate"
            />
        );
        expect(screen.getByText('123%')).toBeTruthy();
    });

    it('should render the max value formatted when annualinterestrate is assigned', () => {
        render(
            <Slider
                labelTop={'hello world'}
                min={123}
                max={1234444}
                onChange={jest.fn()}
                value={12354}
                name="annualInterestRate"
            />
        );
        expect(screen.getByText('1234444%')).toBeTruthy();
    });
});
