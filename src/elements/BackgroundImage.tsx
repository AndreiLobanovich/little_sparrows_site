import React from 'react';
import {Box, Container, useMediaQuery} from '@mui/material';
import theme from "./Theme";

interface BackgroundImageProps {
    imageUrl?: string;
    children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl, children }) => {
    const backgroundStyles = imageUrl ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    } : {
        backgroundColor: "#FFFAF4"
    };
    const opacity = imageUrl ? 0.35 : 0;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Container sx={{
            position: 'relative',
            height: '100vh',
            maxWidth: 'none !important'
        }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    '::before': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, ' + opacity + ')',
                        zIndex: 1,
                    },
                    ...backgroundStyles,
                    zIndex: 0,
                }}
            />
            <Box sx={{ position: 'relative', zIndex: 2, px: isMobile ? '20px' : '73px' }}>
                {children}
            </Box>
        </Container>
    );
};

export default BackgroundImage;
