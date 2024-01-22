import React from "react";
import theme from "../elements/Theme";
import {Box, Typography, useMediaQuery} from "@mui/material";
import TextToppedImage from "../elements/TextToppedImage";
import Slider from "react-slick";
import {testimonials} from "../mainPage/testimonials";


const SampleMenuFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const settings = {
        dots: true,
        infinite: true,
        speed: 10000,
        autoplaySpeed: 0,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        pauseOnFocus: true,
        focusOnSelect: true,
        autoplay: true,
    };
    const menuUrls = [
        '/approachPage/sampleMenu1.jpg',
        '/approachPage/sampleMenu2.jpg',
        '/approachPage/sampleMenu3.jpg',
        '/approachPage/sampleMenu4.jpg'
    ];
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '23px',
            flexDirection: 'column',
        }}>
            <Typography variant={'h3'} gutterBottom textAlign='center'>
                View our sample menus:
            </Typography>
            <Box width='100%'>
                <Slider {...settings}>
                    {menuUrls.map((url, index) => {
                        return (
                            <Box p={2}>
                                <TextToppedImage imagePath={url} children={''} opacity={0}/>
                            </Box>
                        )
                    })}
                </Slider>
            </Box>
        </Box>
    )
}

export default SampleMenuFrame;