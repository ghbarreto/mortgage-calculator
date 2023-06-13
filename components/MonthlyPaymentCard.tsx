import React from 'react';

import styled from 'styled-components';

import { Spinner, Text } from './';

const StyledCard = styled.div`
    background-color: var(--white);
    text-align: center;
    padding: 30px;
    border-radius: 25px;
    position: relative;
`;

const StyledText = styled(Text)`
    margin-top: 20px;
    margin-bottom: 40px;
`;

const StyledSpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    bottom: -40px;
    width: max-content;
    border-radius: 25px;
    padding: 12px 24px;
    font-size: 16px;
    background-color: var(--dark-purple);
    color: var(--white);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: var(--font-family);

    &:hover {
        background-color: var(--purple);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px var(--purple);
    }
`;

const StyledSpan = styled.span`
    font-size: 25px;
    position: relative;
    top: -15px;
    margin-right: 5px;
`;

export const MonthlyPaymentCard = ({
    value,
    submit,
    isLoading,
}: {
    value: number;
    submit: () => void;
    isLoading: boolean;
}) => {
    return (
        <StyledCard>
            {isLoading ? (
                <StyledSpinnerContainer>
                    <Spinner />
                </StyledSpinnerContainer>
            ) : (
                <>
                    <Text type="bodyLarge" color="var(--gray)">
                        Your total monthly payments will be
                    </Text>

                    <StyledText type="h1">
                        <StyledSpan>$</StyledSpan>
                        {value ? value.toLocaleString() : '0'}
                    </StyledText>

                    <StyledText type="bodyLarge" color="var(--gray)">
                        /month
                    </StyledText>

                    <Button onClick={() => submit()}>Apply Today</Button>
                </>
            )}
        </StyledCard>
    );
};
