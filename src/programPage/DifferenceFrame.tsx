import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import TextToppedImage from "../elements/TextToppedImage";


const DifferenceFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const cardData = [
        {
            title: 'Small groups',
            description: 'An unmatched 7:1 pupil-teacher ratio ensures your child gets the needed attention.',
            imagePath: '/programPage/card1.jpg'
        },
        {
            title: 'Prominent tutors',
            description: 'Children learn from prominent artists, athletes, and preschool pedagogy experts.',
            imagePath: '/programPage/card2.jpg'
        },
        {
            title: 'Language-immersion',
            description: 'Native-speaking teachers help your kid adopt new languages in the most natural way.',
            imagePath: '/programPage/card3.jpg'
        }
    ]
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: isMobile ? '20px' : '73px',
            py: '5vh'
        }}>
            <Typography variant={'h2'} textAlign={'center'}>
                The Little Sparrows difference
            </Typography>
            <Grid container spacing={5}>
                {cardData.map((card, index) =>
                    <Grid item sm={12} md={4}>
                        <TextToppedImage imagePath={card.imagePath}>
                            <Typography variant={'h3'} color='white'>
                                {card.title}
                            </Typography>
                        </TextToppedImage>
                        <Typography variant={'h4'}>
                            {card.description}
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default DifferenceFrame;