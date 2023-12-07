'use client';

import React, { ReactElement } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography, useTheme } from '@mui/material';

export interface ClientComponentProps {
    name: string;
    description: string;    
}

export const ClientComponent = ({
    name,
    description
}: ClientComponentProps): ReactElement => {
    const theme = useTheme();

    return (
        <Container>
            <Box marginY={theme.spacing(2)}>
                <Typography variant="h1">Hello, {name}!</Typography>
                <Accordion>
                    <AccordionSummary>More Complex?</AccordionSummary>
                    <AccordionDetails>{description}</AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}