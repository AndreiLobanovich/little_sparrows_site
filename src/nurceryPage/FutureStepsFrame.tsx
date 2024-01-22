import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";

const FutureStepsFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: isMobile ? '20px' : '73px',
            py: '5vh'
        }}>
            <Typography variant={'h2'} textAlign='center'>
                Ready for the future steps
            </Typography>
            <Typography variant={'h3'} fontWeight={400}>
                Once they come of age, your child can seamlessly transition to kindergarten groups - not leaving
                the environment they are already familiar with. Surrounded by their young friends, your child can
                quickly embrace a more dynamic education program.
            </Typography>
            <Box my='5vh' mx={'auto'}>
                <OrangeHighlightButton onClick={() => handleClick('program')}>
                    <Typography variant='h3'>
                        OUR PROGRAM
                    </Typography>
                </OrangeHighlightButton>
            </Box>

        </Box>
    )
}

export default FutureStepsFrame;