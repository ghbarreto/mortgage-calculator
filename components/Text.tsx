import React from 'react';
import styled from 'styled-components';

type TStyles = {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
};

type TText = {
    children: React.ReactNode;
    elementType?: 'div' | 'span' | 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'label';
    type?: 'h1' | 'bodyLarge' | 'header' | 'paragraph' | 'legend' | 'small-bold';
} & TStyles;

const StyledText = styled.p<TText>`
    color: ${props => props.color || 'var(--base-color)'};
    font-size: ${props => props.fontSize};
    padding: 0;
    margin: 0;
    font-family: var(--font-family);
    ${({ type }) => {
        switch (type) {
            case 'bodyLarge':
                return `font-size: 14px; font-weight: bold; `;
            case 'h1':
                return `font-size: 40px; font-weight: bold; `;
            case 'header':
                return `font-size: 18px; font-weight: normal;`;
            case 'legend':
                return `font-size: 12px; font-weight: 400;`;
            case 'small-bold':
                return `font-size: 11px; font-weight: 600; `;
            default:
                return `font-size: 14px; font-weight: normal`;
        }
    }};
`;

export const Text = ({ children, elementType = 'p', ...textProps }: TText) => {
    return (
        <StyledText as={elementType} {...textProps}>
            {children}
        </StyledText>
    );
};
