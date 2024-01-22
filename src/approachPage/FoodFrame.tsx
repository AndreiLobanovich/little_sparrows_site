import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import ResizableImage from "../elements/ResizableImage";

const FoodFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '23px',
            px: isMobile ? '20px' : '73px',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Typography variant='h2'>
                We go above and beyond
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={12} md={7}>
                    <Typography variant='h2'>
                        🥗
                    </Typography>
                    <Typography variant='h3'>
                        Nutritious, home-cooked meals
                    </Typography>
                    <Typography variant='h3' fontWeight={400}>
                        ✅ A resident chef prepares healthy and delicious meals every day<br/>
                        ✅ The freshest ingredients, half of which are homegrown in a nearby village<br/>
                        ✅ Menus based on fish, chicken, veal, vegetables, and fruit<br/>
                        ✅ Approved by a nutrition expert<br/><br/>
                        We also teach your child about the importance of substituting snacks and candy with fruits and
                        vegetables.
                    </Typography>
                </Grid>
                <Grid item sm={12} md={5} sx={{borderRadius: '53px', overflow: 'hidden'}}>
                    <ResizableImage src={'/approachPage/canteen.png'} width={'100%'}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FoodFrame;