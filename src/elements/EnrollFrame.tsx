import React from "react";
import theme from "./Theme";
import {Box, Typography, useMediaQuery} from "@mui/material";
import OrangeHighlightButton from "./OrangeHighlightButton";
import {useHistory} from "react-router-dom";

const EnrollFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '30px',
            py: '5vh',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Box sx={{flexGrow: 3}}/>
            <Typography variant={'h2'} color={theme.palette.secondary.main} textAlign='center'>
                Enroll your child today
            </Typography>
            <Box sx={{minHeight: '2vh'}}/>
            <Typography variant={'h3'}>
                Ready to secure a spot at one of Belgrade’s most renowned kindergartens?
                Fill out a 2-minute form by clicking on the following link.
            </Typography>
            <Box mx='auto' py='5vh'>
                <OrangeHighlightButton onClick={() => handleClick('enroll')}>
                    <Typography variant='h3'>
                        ENROLL MY CHILD
                    </Typography>
                </OrangeHighlightButton>
                <Typography fontWeight={700} mx='auto' variant='h4' textAlign='center'>
                Limited slots avaible
            </Typography>
            </Box>

        </Box>
    )
}

export default EnrollFrame;