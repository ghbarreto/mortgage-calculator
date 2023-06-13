import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import { Text } from './';

export const RadioButtons = ({
    onChange,
}: {
    onChange: (
        event: Event | React.ChangeEvent<HTMLInputElement>,
        value: number | Array<number>,
        activeThumb: number
    ) => void;
}) => {
    return (
        <FormControl>
            <StyledLabel htmlFor="range" tabIndex={0}>
                <Text type="small-bold" color={'var(--gray)'}>
                    Period
                </Text>
            </StyledLabel>
            <RadioGroup aria-labelledby="radio-buttons" defaultValue="female" name="termOfLoan">
                <FormControlLabel
                    value={20}
                    control={
                        <Radio
                            sx={{
                                '&.Mui-checked': {
                                    color: 'var(--dark-purple)',
                                },
                            }}
                            onChange={e => onChange(e, Number(e.target.value), 0)}
                        />
                    }
                    label="20 Years"
                />
                <FormControlLabel
                    value={25}
                    control={
                        <Radio
                            sx={{
                                '&.Mui-checked': {
                                    color: 'var(--dark-purple)',
                                },
                            }}
                            onChange={e => onChange(e, Number(e.target.value), 0)}
                        />
                    }
                    label="25 Years"
                />
                <FormControlLabel
                    value={30}
                    control={
                        <Radio
                            sx={{
                                '&.Mui-checked': {
                                    color: 'var(--dark-purple)',
                                },
                            }}
                            onChange={e => onChange(e, Number(e.target.value), 0)}
                        />
                    }
                    label="30 Years"
                />
            </RadioGroup>
        </FormControl>
    );
};

const StyledLabel = styled.label``;
