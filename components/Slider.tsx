import React from 'react';
import styled from 'styled-components';

import MUISlider from '@mui/material/Slider';
import { NumericFormat } from 'react-number-format';

import { Text } from './';

type TSlider = {
    value: number;
    min: number;
    max: number;
    labelTop: string;
    onChange: (event: Event, value: number | Array<number>, activeThumb: number) => void;
    name: 'principal' | 'annualInterestRate';
};

export const Slider = ({ labelTop, value, min, max, onChange, name }: TSlider) => {
    const formatNumber = (max / 1_000_000).toFixed(1);
    const isPrincipal = name === 'principal';

    const marks = [
        {
            value: min,
            label: !isPrincipal ? `${min}%` : `$${min / 1_000}K`,
        },

        {
            value: max,
            label: !isPrincipal ? `${max}%` : `$${formatNumber}M`,
        },
    ];

    return (
        <StyledContainer>
            <StyledLabel htmlFor="range" tabIndex={0}>
                <Text type="small-bold" color={'var(--gray)'}>
                    {labelTop}
                </Text>
            </StyledLabel>
            <StyledText type="header" color={'var(--base-color)'} fontWeight="bold">
                {isPrincipal && <StyledPrefix>$</StyledPrefix>}
                {isPrincipal ? (
                    <StyledCurrency as="span">{value.toLocaleString()}</StyledCurrency>
                ) : (
                    <StyledNumericFormat
                        value={value}
                        displayType={'text'}
                        suffix={'%'}
                        decimalScale={1}
                        fixedDecimalScale
                    />
                )}
            </StyledText>
            <SliderContainer>
                <StyledMUISlider
                    size="small"
                    defaultValue={70}
                    aria-label={labelTop}
                    step={!isPrincipal ? 0.5 : undefined}
                    min={min}
                    name={name}
                    max={max}
                    marks={marks}
                    onChange={onChange}
                    value={value}
                    id="range"
                />
            </SliderContainer>
        </StyledContainer>
    );
};

const SliderContainer = styled.div`
    margin: 0 auto;
    padding: 5px;
`;

const StyledContainer = styled.div`
    margin-top: 20px;
`;

const StyledMUISlider = styled(MUISlider)`
    margin-top: -5px;
    & > .MuiSlider-thumb {
        color: white;
        border: 1px solid var(--indigo);
    }

    & > .MuiSlider-markLabel {
        color: var(--light-gray);
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 12px;
        margin-top: -4px;
    }
`;

const StyledLabel = styled.label``;

const StyledPrefix = styled.span`
    font-size: 12px;
    font-family: var(--font-family);
    font-weight: 600;
`;

const StyledNumericFormat = styled(NumericFormat)`
    position: relative;
    top: 4px;
    margin-left: 2px;
    font-family: var(--font-family);
    font-weight: 600;
`;

const StyledText = styled(Text)`
    margin-left: 10px;
`;

const StyledCurrency = styled(Text)`
    position: relative;
    top: 8px;
    margin-left: 2px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 25px;
`;
