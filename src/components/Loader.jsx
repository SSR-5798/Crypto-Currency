import React from 'react';
import { Stack, CircularProgress } from '@mui/material';

const Loader = () => (
    <Stack justifyContent="center" alignItems="center" m="2rem">
      <CircularProgress/>
    </Stack>
)

export default Loader;