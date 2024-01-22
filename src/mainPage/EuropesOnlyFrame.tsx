import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";


const EuropesOnlyFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    let history = useHistory();
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '80px',
            px: isMobile ? '20px' : '73px',
            paddingBottom: '46px',
            flexDirection: 'column',
        }}>
            <Typography variant={'h2'} textAlign='center'>
                A world-class international kindergarten & nursery
            </Typography>
            <Typography variant={'h2'} textAlign='center' fontWeight={400}>
                in the heart of Belgrade
            </Typography>
            <Box display='flex' justifyContent='center'>
                <Grid xs={12} spacing={5} container>
                    <Grid item sm={8} xs={12}>
                        <Typography variant={'h3'} fontWeight={400}>
                            To create a sense of a home-like environment for children and parents alike,
                            Little Sparrows is the only kindergarten that offers:<br/>
                            ✅ 7:1 pupil-teacher ratio, ensuring your child gets the needed dedication<br/>
                            ✅ Nutritious, home-cooked meals, prepared daily by our resident chef<br/>
                            ✅ Book and eco clubs for parents, allowing you to get involved - if you want<br/><br/>
                            We enforce strict safety and security measures. We believe each parent should enjoy peace of
                            mind after leaving their child at our facilities, or to our experienced mini-bus driver.
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <ResizableImage src={'/mainPage/europesOnlyFrameImage.jpg'}/>
                    </Grid>
                </Grid>
            </Box>
            <Box mx='auto' my='5vh'>
                <OrangeHighlightButton onClick={() => {
                    history.push('/approach')
                }}>
                    <Typography variant='h3'>
                        APPROACH
                    </Typography>
                </OrangeHighlightButton>
            </Box>
        </Box>
    )
}

export default EuropesOnlyFrame;