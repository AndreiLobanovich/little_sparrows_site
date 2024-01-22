import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";

const GrowthFoundationsFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
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
                The foundations of growth 🐣
            </Typography>
            <Grid container spacing={5}>
                <Grid item sm={12} md={7}>
                    <Typography variant={'h3'} fontWeight={400}>
                        Our Cambridge Foundation nursery program focuses on the balanced development of your
                        child’s physical, intellectual, emotional, and social abilities.<br/><br/>
                        Immersing your child in a multicultural, multilingual setting from their early years enables
                        seamless absorption of languages and habits - through the power of play.<br/><br/>
                        Our nursery program, attuned to the little sparrows’ age and abilities, lays the
                        foundations for their educational journey ahead.
                    </Typography>
                </Grid>
                <Grid item sm={12} md={5}>
                    <Box borderRadius='53px' overflow='hidden'>
                        <ResizableImage src={'/nurseryPage/growthFoundations.png'} width={'100%'}/>
                    </Box>
                </Grid>
            </Grid>
            <Box mx='auto' my='5vh'>
                <OrangeHighlightButton onClick={() => handleClick('approach')}>
                    <Typography variant='h3'>
                        OUR APPROACH
                    </Typography>
                </OrangeHighlightButton>
            </Box>

        </Box>
    )
}

export default GrowthFoundationsFrame;