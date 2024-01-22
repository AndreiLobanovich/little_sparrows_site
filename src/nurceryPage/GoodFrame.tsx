import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import TextToppedImage from "../elements/TextToppedImage";

const GoodFrame: React.FC = () => {
    const cardData = [
        {
            title: 'Outstanding 5:1 pupil-teacher ratio',
            subTitle: 'At Little Sparrows crèche, your little one receives care from our carefully-vetted ' +
                'nannies. Our international nursery in Belgrade has small groups, ensuring each child ' +
                'gets as much attention as they deserve.',
            imageUrl: '/card71.jpg'
        },
        {
            title: 'Top quality, stimulating toys',
            subTitle: 'A selection of first-class toys designed to stimulate curiosity makes it easier for our ' +
                'caring staff to help your child master important milestones such as using utensils, ' +
                'potty training, and dressing independently.',
            imageUrl: '/card72.jpg'
        },
        {
            title: 'Healthy food made by a resident chef',
            subTitle: 'A proper diet is essential when growing up, especially during the early years. That is why ' +
                'our resident chef uses nothing but the most nutritious, fresh ingredients when preparing ' +
                'age-appropriate meals every day.',
            imageUrl: '/card73.png'
        },
        {
            title: 'Close compound, regulated access',
            subTitle: 'Your child’s safety comes first, second, and last. Our classrooms are as child-proof as ' +
                'possible. The facilities offer full privacy and security due to solid fences, security ' +
                'doors, and an advanced surveillance system.',
            imageUrl: '/card74.jpg'
        }
    ]
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: isMobile ? '20px' : '73px',
            py: '5vh'
        }}>
            <Typography variant={'h2'} textAlign='center' gutterBottom>
                When “good” is not good enough
            </Typography>
            <Grid container spacing={5}>
                {cardData.map((card, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <TextToppedImage imagePath={card.imageUrl}>
                                <Typography variant='h3' color='white'>
                                    {card.title}
                                </Typography>
                            </TextToppedImage>
                            <Typography variant='h4' mt='2vh'>
                                {card.subTitle}
                            </Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default GoodFrame;