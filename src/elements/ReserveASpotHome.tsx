import React from 'react';
import { Box, Typography } from '@mui/material';
import OrangeHighlightButton from './OrangeHighlightButton';
import {useHistory} from "react-router-dom";

const ReserveASpotHome = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push('/enroll')
    }
    return (
        <Box sx={{
            my: 4,
            mx: 'auto',
            textAlign: 'left',
            p: 3,
            alignItems: 'center',
            width: 'fit-content',
            justifyContent: 'center'
        }}>
            <Typography variant="h3" textAlign={'left'} maxWidth='60vw' color={'white'} lineHeight={1.1}>
                Give your child a head start in life
            </Typography> 
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Box >
                    <Typography color='white' fontWeight='700'>
                        A caring atmosphere where children feel at home <br/>
                        A multicultural, language-immersive environment <br/>
                        A world-leading preschool academic program <br/>
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />

            </Box>
            <Box>
                <OrangeHighlightButton onClick={handleClick}>
                    RESERVE A SPOT
                </OrangeHighlightButton>
            </Box>
        </Box>
    );
};

export default ReserveASpotHome;
