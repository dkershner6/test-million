'use client';

import React, { ReactElement } from 'react';

import { Accordion, AccordionSummary, Box, Container, Typography, useTheme } from '@mui/material';

export interface ClientComponentProps {
    name: string;
}

export const ClientComponent = ({
    name
}: ClientComponentProps): ReactElement => {
    const theme = useTheme();

    return (
        <Container>
            <Box marginY={theme.spacing(2)}>
                <Typography variant="h1">Hello, {name}!</Typography>
                <Accordion>
                    <AccordionSummary>More Complex?</AccordionSummary>
                </Accordion>
            </Box>
        </Container>
    );
}