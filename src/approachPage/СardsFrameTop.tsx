import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import TextToppedImage from "../elements/TextToppedImage";


const CardsFrameTop: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const cardData = [
        {
            imagePath: '/approachPage/card4.jpg',
            title: 'Regular checkups',
            description: 'Regular dental and medical checkups, with access to a child and family psychologist.',
        },
        {
            imagePath: '/approachPage/card5.jpg',
            title: 'Tooth hygiene',
            description: 'We supply a dental hygiene set and guide children to brush their teeth at least twice a day.',
        },
        {
            imagePath: '/approachPage/card6.jpg',
            title: 'Accident insurance',
            description: 'Each child gets accident insurance that includes kindergarten stays and field trips, free of charge.',
        },
    ];
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            px: isMobile ? '20px' : '73px',
            py: '5vh',
            flexDirection: 'column',
        }}>
            <img src="/birds/red.png" alt="Описание" style={{
                position: 'absolute',
                transform: ' translate(-120%, -45%) scaleX(-1) rotate(-30deg)',
                width: '40%',
                height: 'auto',
            }}/>
            <Typography variant='h2' textAlign='center'>
                The Little Sparrows approach
            </Typography>
            <Box display='flex' flexDirection={isMobile ? 'column' : 'row'} justifyContent='space-between'>
                {cardData.map((card, index) => (
                    <Box width={isMobile ? '100%' : '30%'} p={2}>
                        <TextToppedImage imagePath={card.imagePath}>
                            <Typography variant='h3' color='white'>{card.title}</Typography>
                        </TextToppedImage>
                        <Typography variant='h4'>
                            {card.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default CardsFrameTop;