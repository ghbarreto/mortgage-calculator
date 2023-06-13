import React from 'react';
import styled from 'styled-components';

import MUISlider from '@mui/material/Slider';

import { makeStyles } from '@mui/styles';
import { Text } from './';

type TSlider = {
    value: number;
    min: number;
    max: number;
    labelTop: string;
    onChange: (event: Event, value: number | Array<number>, activeThumb: number) => void;
};

export const Slider = ({ labelTop, value, min, max, onChange }: TSlider) => {
    return (
        <StyledContainer>
            <StyledLabel htmlFor="range" tabIndex={0}>
                <Text type="small-bold" color={'var(--gray)'}>
                    {labelTop}
                </Text>
            </StyledLabel>
            <SliderContainer>
                <StyledMUISlider
                    size="small"
                    defaultValue={70}
                    aria-label={labelTop}
                    valueLabelDisplay="auto"
                    min={min}
                    max={max}
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

const StyledLabel = styled.label``;
const StyledContainer = styled.div`
    margin-top: 40px;
`;

const StyledMUISlider = styled(MUISlider)`
    margin-top: -5px;
    & > .MuiSlider-thumb {
        color: white;
        border: 1px solid var(--indigo);
    }
`;
