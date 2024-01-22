import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";


const PartOfCambridgeFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            py: '5vh',
            px: isMobile ? '20px' : '73px',
            flexDirection: 'column',
        }}>
            <Grid container spacing={12} sx={{display: 'flex', flexDirection: 'row'}}>
                <Grid item sx={{display: 'flex', flexDirection: 'column'}} xs={12} md={7}>
                    <Typography variant={'h2'} mx='auto' marginBottom='2vh'>
                        Little Sparrows is a proud part of the Cambridge International School system
                    </Typography>
                    <Typography variant={'h3'} fontWeight={400}>
                        As the first kindergarten and nursery in continental Europe to earn the prestigious
                        certification, we provide the best-in-class education and care to all our age groups.<br/><br/>

                        The Cambridge Early Years advantages:<br/>
                        👉 Equal emphasis on physical, intellectual, emotional, and social development<br/>
                        👉 Focus on growing informed curiosity and a lasting passion for learning<br/>
                        👉 Foundations that open doors to the world’s best schools and universities
                    </Typography>
                </Grid>
                <Grid item md={5}>
                    <ResizableImage src={'/mainPage/cambridgeBook.png'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PartOfCambridgeFrame;