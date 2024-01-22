import React from "react";
import theme from "../elements/Theme";
import {Box, Typography, useMediaQuery} from "@mui/material";

const FutureStartFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                px: isMobile ? '20px' : '73px',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            pb='5vh'
        >
            <Typography variant='h2' textAlign='center'>
                Where your child’s future starts
            </Typography>
            <Typography variant='h3' fontWeight={400}>
                Our international kindergarten is on a mission to reveal the boundless potential within each child.
                Surrounded by like-minded peers and supported by caring tutors, your child gains the fuel to start
                exploring the world.<br/><br/>
                At our Vračar kindergarten, your child doesn’t just become ready for primary education. Your child gets
                ready for life, equipped with healthy habits and an appreciation for education.
            </Typography>
        </Box>
    )
}

export default FutureStartFrame;