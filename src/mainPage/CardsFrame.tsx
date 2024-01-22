import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
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
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                {cards.slice(0, 3).map((card, index) => {
                    return (
                        <Box key={index} sx={{width: '30%'}} mx='auto'>
                            <TextToppedImage imagePath={card.image}>
                                <Typography variant={'h3'} color='white'>
                                    {card.title}
                                </Typography>
                            </TextToppedImage>
                            <Typography variant={'h4'} marginTop='10px'>
                                {card.text}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
            <Box height='5vh'/>
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                {cards.slice(3, 6).map((card, index) => {
                    return (
                        <Box key={index} sx={{width: '30%'}} mx='auto'>
                            <TextToppedImage imagePath={card.image}>
                                <Typography variant={'h3'} color='white'>
                                    {card.title}
                                </Typography>
                            </TextToppedImage>
                            <Typography variant={'h4'} marginTop='10px'>
                                {card.text}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default CardsFrame;