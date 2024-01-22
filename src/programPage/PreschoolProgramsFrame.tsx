import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import ResizableImage from "../elements/ResizableImage";

const PreschoolProgramsFrame: React.FC = () => {
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
                Best-in-class preschool programs
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6}>
                    <Typography variant={'h3'} fontWeight={400}>
                        We are the only international kindergarten and nursery in continental Europe to earn the
                        prestigious Cambridge International School Early Years certification.<br/><br/>
                        Our programs are language-immersive, fun-packed, and holistic. They nurture your child’s
                        physical, intellectual, emotional, and social abilities - while igniting a lasting passion for
                        learning.
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                    <ResizableImage src={'/bestInClass.png'} width={'100%'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PreschoolProgramsFrame;