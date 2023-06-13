import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner = () => {
    return (
        <Stack sx={{ color: 'var(--dark-purple)' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
        </Stack>
    );
};
