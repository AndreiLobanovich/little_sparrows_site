import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";


const LangProgramFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const history = useHistory();
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: isMobile ? '20px' : '73px',
            py: '5vh'
        }}>
            <Grid container>
                <Grid item sm={12} md={6}>
                    <Typography variant={'h3'} textAlign='center'>
                        Full-day language programs:
                    </Typography>
                    <Typography variant={'h3'} fontWeight={400} textAlign='center'>
                        English<br/>
                        Russian
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Typography variant={'h3'} textAlign='center'>
                        Weekly language lessons:
                    </Typography>
                    <Typography variant={'h3'} fontWeight={400} textAlign='center'>
                        English<br/>
                        German<br/>
                        Serbian
                    </Typography>
                </Grid>
            </Grid>
            <Box mx='auto'>
                <OrangeHighlightButton onClick={() => history.push('pricing')}>
                    <Typography variant={'h3'} >
                        OUR PRICING
                    </Typography>
                </OrangeHighlightButton>
            </Box>
        </Box>
    )
}

export default LangProgramFrame;