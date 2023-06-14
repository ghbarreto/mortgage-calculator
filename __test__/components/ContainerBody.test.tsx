import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContainerBody } from '../../components';
import '@testing-library/jest-dom';

describe('it should render the ContainerBody correctly', () => {
    it('should render the alt text', () => {
        render(<ContainerBody>hello world</ContainerBody>);
        expect(screen.getByText('hello world')).toBeTruthy();
    });
});
