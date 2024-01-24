import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";
import ResizableImage from "../elements/ResizableImage";


const ReserveNPricingLinkFrame: React.FC = () => {
    let history = useHistory();
    const ageGroups = [
        {
            url: '/mainPage/ageGroup1.JPG',
            title: 'Cambridge Foundation',
            subtitle: '(nursery) 1.5-3 years old'
        },
        {
            url: '/mainPage/ageGroup2.JPG',
            title: 'Cambridge Early Years 1',
            subtitle: '3-4 years old'
        },
        {
            url: '/mainPage/ageGroup3.JPG',
            title: 'Cambridge Early Years 2',
            subtitle: '4-5 years old'
        },
        {
            url: '/mainPage/ageGroup4.JPG',
            title: 'Cambridge Early Years 3',
            subtitle: '5-6 years old'
        }
    ];

    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{

            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '46px',
            px: isMobile ? '20px' : '73px',
            paddingBottom: '46px',
            flexDirection: 'column',
        }}>
            <Box display='flex' justifyContent='center'>
                <Grid container spacing={7} sx={{display: 'flex', justifyContent: 'center'}}>
                    {ageGroups.map((ageGroup, index) => (
                        <Grid item sm={6} md={3} key={index}>
                            <Box borderRadius='53px' overflow='hidden'>
                                <ResizableImage src={ageGroup.url} width='100%' height='auto'/>
                            </Box>
                            <Typography variant={'h3'} sx={{fontWeight: 800}} textAlign='center'>
                                {ageGroup.title}
                            </Typography>
                            <Typography variant={'h3'} sx={{fontWeight: 400}} textAlign='center'>
                                {ageGroup.subtitle}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Typography variant={'h3'} my='5vh' sx={{fontWeight: 400, width: '75%'}}>
                Tailored to provide your child with the best possible start in life, our Cambridge
                International School programs nurture every facet of
                development: physical, intellectual, emotional, and social.<br/><br/>

                Our play-based approach instills vital skills and habits while fostering creativity
                and critical thinking. We go beyond mere engagement, boosting your
                child's self-confidence and imagination.
            </Typography>
            <img
                src="/birds/blue.png"
                alt="Описание"
                style={{
                    position: 'absolute',
                    transform: 'translate(170%, 65%) rotate(-40deg)',
                    width: '40%',
                    height: 'auto',
                }}
            />
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', height: '56px'}}>
                <Box>
                    <OrangeHighlightButton onClick={() => handleClick('enroll')}>
                        <Typography variant='h3' color={theme.palette.text.secondary}>
                            RESERVE A SPOT
                        </Typography>
                    </OrangeHighlightButton>
                </Box>
                <Box>
                    <OrangeHighlightButton onClick={() => handleClick('our-program')}>
                        <Typography variant='h3' color={theme.palette.text.secondary}>
                            PROGRAM
                        </Typography>
                    </OrangeHighlightButton>
                </Box>
            </Box>
        </Box>
    )
}


export default ReserveNPricingLinkFrame;