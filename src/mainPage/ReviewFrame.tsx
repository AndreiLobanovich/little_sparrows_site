import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import Slider from 'react-slick';
import {testimonials} from "./testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ReviewFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const settings = {
        dots: true,
        infinite: true,
        speed: 20000,
        autoplaySpeed: 0,
        slidesToShow: isMobile ? 2 : 3,
        slidesToScroll: 1,
        pauseOnFocus: true,
        focusOnSelect: true,
        autoplay: true,
    };
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <img src="/birds/red.png" alt="Описание" style={{
                position: 'absolute',
                transform: ' translate(-120%, -45%) scaleX(-1) rotate(-30deg)',
                width: '40%',
                height: 'auto',
            }}/>
            <Typography variant={'h2'} color={theme.palette.text.primary} textAlign='center'>
                Why parents like us
            </Typography>
            <Typography variant={'h2'} color={theme.palette.text.primary} fontWeight={400} textAlign='center'>
                (and children love us)
            </Typography>
            <Box width='100%'>
                <Slider {...settings}>
                    {testimonials.map((review, index) => (
                        <Box p={2}>
                            <Box
                                border={'5px solid ' + theme.palette.secondary.main}
                                borderRadius={'53px'}
                                width='100%'
                                p='20px'
                            >
                                <Typography variant='h4'>
                                    {review.title}
                                </Typography>
                                <Typography variant='h4' fontWeight={400}>
                                    {review.text}
                                </Typography>
                                <Typography variant='h4'>
                                    {review.author}
                                </Typography>
                            </Box>
                        </Box>

                    ))}
                </Slider>
            </Box>
        </Box>
    )
}

export default ReviewFrame;