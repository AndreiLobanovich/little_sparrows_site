import React from "react";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import theme from "./Theme";
import ResizableImage from "./ResizableImage";

const CambridgeFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                px: isMobile ? '20px' : '73px',
                py: '10vh',
                height: '10 0%',
            }}
        >
            <Grid container spacing={12} style={{height: '100%'}} p='0'>
                <Grid item xs={8} style={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant={'h3'} sx={{fontWeight: 400}}>
                        Our international primary school is proud to have earned the esteemed Cambridge Primary
                        certification.
                    </Typography>
                    <Typography variant={'h3'} sx={{fontWeight: 400}}>
                        Educational program accredited and certified by
                        the Ministry of Education of the Republic of Serbia.
                    </Typography>
                </Grid>
                <Grid xs={1}/>
                <Grid item xs={3} style={{display: 'flex', flexDirection: 'column'}}>
                    <ResizableImage src={'/cambridge.png'}/>
                    <ResizableImage src={'/minProsvete.png'}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CambridgeFrame;
