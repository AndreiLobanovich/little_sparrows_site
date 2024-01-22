import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import TextToppedImage from "../elements/TextToppedImage";

const MoreThanLearningFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const cardData = [
        {
            imagePath: '/approachPage/card1.jpg',
            title: 'Renowned tutors',
            subTitle: 'We encourage children to share their feelings, form friendships, and reach out if ' +
                'they need support.'
        },
        {
            imagePath: '/approachPage/card2.jpg',
            title: 'Multicultural environment',
            subTitle: 'Your child bonds with teachers and students of different cultures, nationalities, and ' +
                'races.'
        },
        {
            imagePath: '/approachPage/card3.jpg',
            title: 'Leading-edge education',
            subTitle: 'We meet the strict Cambridge Early Years guidelines for excellence in preschool education.'
        },
    ];
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                px: isMobile ? '20px' : '73px',
                flexDirection: 'column',
            }}
            pb='5vh'
        >
            <img src="/birds/yellow.png" alt="Описание" style={{
                position: 'absolute',
                transform: ' translate(-60%, 55%) scale(0.5) rotate(60deg)',
                width: '40%',
                height: 'auto',
            }}/>
            <Grid container spacing={5}>
                {cardData.map((card, index) => (
                    <Grid item sm={12} md={4} key={index}>
                        <TextToppedImage imagePath={card.imagePath}>
                            <Typography variant={'h3'} color='white'>
                                {card.title}
                            </Typography>
                        </TextToppedImage>
                        <Typography variant={'h4'} marginTop='10px'>
                            {card.subTitle}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
            <Typography variant='h2' textAlign='center' gutterBottom mt='5vh'>
                More than learning, it's about growth
            </Typography>
            <Grid container>
                <Grid item sm={12} md={7}>
                    <Typography variant='h3' fontWeight={400}>
                        Our approach to preschool education blends the worlds of arts and sports with mastering social
                        skills and life habits.<br/><br/>
                        With our native-speaking staff helping your child soak up English or Russian in a playful way,
                        learning becomes an adventure.<br/><br/>
                        At Little Sparrows, your child forges strong foundations for future growth, emerging as a
                        confident, empathetic, and ambitious young person.
                    </Typography>
                </Grid>
                <Grid item sm={12} md={5}>
                    <TextToppedImage imagePath={'/kidsAproach.png'} children={''} opacity={0}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MoreThanLearningFrame;