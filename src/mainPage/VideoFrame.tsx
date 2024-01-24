import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";

const VideoFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: isMobile ? '20px' : '73px',
            py: '10vh',
        }}>
            <Grid container spacing={10} justifyContent={isMobile ? 'left' : "center"} alignItems="center">
                <Grid item xs={12} md={9} order={1}>
                    <video width="100%" controls>
                        <source src="sample-5s.mp4" type="video/mp4"/>
                    </video>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Typography variant='h3' fontWeight={400}>
                        👉 Language-immersive programs<br/>👉 Healthy food made by a resident chef
                    </Typography>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Typography variant='h3' fontWeight={400}>
                        👉 Attentive and caring staff<br/>👉 Medical and dental checkups
                    </Typography>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Typography variant='h3' fontWeight={400}>
                        👉 Renowned, experienced tutors<br/>👉 Closed compound, regulated access
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default VideoFrame;