import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";


const NurseryFrame: React.FC = () => {
    let history = useHistory();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            py: '5vh',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Box sx={{flexGrow: 1}}/>
            <Typography variant={'h2'}>
                Little Sparrows nursery
            </Typography>
            <Grid container spacing={12} sx={{display: 'flex', flexDirection: 'row'}}>
                <Grid item sx={{display: 'flex', flexDirection: 'column'}} xs={12} md={7}>
                    <Typography variant={'h3'} fontWeight={400}>
                        Our Cambridge Foundation nursery is a wonderland designed to navigate your little one’s
                        exploration of the world.<br/><br/>
                        Our youngest sparrows absorb languages and basic life skills through a myriad of playful and
                        engaging activities. In small groups where one teacher takes care of up to four pupils, your
                        child can grow in a safe and comforting environment.
                    </Typography>
                </Grid>
                <Grid item md={5}>
                    <ResizableImage src={'/mainPage/nursery.png'}/>
                </Grid>
            </Grid>
            <Box mx='auto' my='5vh'>
                <OrangeHighlightButton onClick={() => history.push('/nurcery')}>
                    <Typography variant='h3'>
                        LEARN MORE
                    </Typography>
                </OrangeHighlightButton>
            </Box>
        </Box>
    )
}

export default NurseryFrame;