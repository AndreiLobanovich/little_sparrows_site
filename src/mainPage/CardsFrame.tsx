import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import TextToppedImage from "../elements/TextToppedImage";


const CardsFrame: React.FC = () => {
    const cards = [
        {
            title: 'Renowned tutors',
            text: 'A team of experienced pedagogy specialists, world-renowned artists, and athletes.',
            image: '/mainPage/card1.jpg'
        },
        {
            title: 'Native-speaking teachers',
            text: 'No better way to master a language than to learn it from native-speaking teachers at a young age.',
            image: '/mainPage/card2.jpg'
        },
        {
            title: 'Fun activities',
            text: 'From karate to pottery, ballet to swimming - or pajama parties - kids love our unique activities.',
            image: '/mainPage/card3.png'
        },
        {
            title: 'Central, quiet location',
            text: 'Located in two villas in a quiet part of Vračar, close to the city center and the inter-city highway.',
            image: '/mainPage/card4.jpg'
        },
        {
            title: 'Parent-friendly hours',
            text: 'From 8:00 to 17:30. For the parents who really need it, we offer the option of an extended stay.',
            image: '/mainPage/card5.jpg'
        },
        {
            title: 'Regular checkups',
            text: 'Regular dental and medical checkups, with access to a child and family psychologist.',
            image: '/mainPage/card6.jpg'
        },
    ]
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Grid container spacing={4}>
                {cards.map((card, index) => {
                    return (
                        <Grid item key={index} sm={6} md={4}>
                            <TextToppedImage imagePath={card.image}>
                                <Typography variant={'h3'} color='white'>
                                    {card.title}
                                </Typography>
                            </TextToppedImage>
                            <Typography variant={'h4'} marginTop='10px'>
                                {card.text}
                            </Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default CardsFrame;