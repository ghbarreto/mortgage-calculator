import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '../../components';
import '@testing-library/jest-dom';

describe('it should render the Text correctly', () => {
    it('should render the alt text', () => {
        render(<Text>hello world</Text>);
        expect(screen.getByText('hello world')).toBeTruthy();
    });
});
