import React from "react";
import theme from "../elements/Theme";
import {Box, Typography, useMediaQuery} from "@mui/material";


const EduFoundationFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                flexDirection: 'column',
                px: isMobile ? '20px' : '73px',
                py: '5vh',
            }}
        >
            <Typography variant={'h2'} textAlign='center'>
                An all-around educational foundation
            </Typography>
            <Typography variant={'h3'} fontWeight={400}>
                Other than playing outside or engaging in stimulating conversations, your child learns basic literacy,
                writing, and math in accordance with the world-leading Cambridge Early Years program.<br/><br/>
                At our kindergarten, children also learn how to behave in traffic, staying aware of the surroundings.
                It’s just a fragment of how our educational programs build the foundations of your child’s future
                success - through play.
            </Typography>
        </Box>
    )
}

export default EduFoundationFrame;