import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography} from "@mui/material";
import TextToppedImage from "../elements/TextToppedImage";


const ClassCardTopFrame: React.FC = () => {
    const cardData = [
        {
            title: 'Ballet and dancing',
            description: 'The class is created by the renowned Konstantin Kostyukov and led by Tamara Ivanović, ' +
                'the principal dancer of the Ballet of the Serbian National Theater.',
            imagePath: '/card51.jpg'
        },
        {
            title: 'Music',
            description: 'Children learn to harness their creative powers through music, experiencing how ' +
                'perseverance leads to improvement.',
            imagePath: '/card52.jpg'
        },
        {
            title: 'Pottery work',
            description: 'Guided by experienced tutors, your child learns to strengthen focus, discover the ' +
                'importance of perseverance, and explore their creative depths.',
            imagePath: '/card53.jpg'
        },
        {
            title: 'Karate',
            description: 'Designed by the Gendarmerie karate club and often led by the members of the national ' +
                'karate team, the age-appropriate class promotes a healthy view of competitiveness.',
            imagePath: '/card61.jpg'
        },
        {
            title: 'Swimming (Optional)',
            description: 'An activity that develops all crucial muscle groups - while building endurance and ' +
                'strength. Held by professional tutors who keep a watchful eye on what is going on in and ' +
                'around the pool.',
            imagePath: '/card62.jpg'
        },
        {
            title: 'Yoga (Optional)',
            description: 'An increasingly popular class aims to help your child become more focused and flexible, ' +
                'in addition to learning about the proper breathing techniques.',
            imagePath: '/card63.jpg'
        }
    ]
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: '46px'
        }}>
            <Typography variant={'h2'} textAlign='center'>
                Classes that spark creativity and nurture proper development
            </Typography>
            <Grid container spacing={5} py='5vh'>
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

export default ClassCardTopFrame;