import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import ResizableImage from "../elements/ResizableImage";


const ParticipationEncouragementFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: isMobile ? '20px' : '73px',
            py: '5vh'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h3'>
                        Parents, welcome! 👋
                    </Typography>
                    <Typography variant='h3' fontWeight={400}>
                        Apart from being able to participate in our book and eco clubs or join our field trips, we
                        encourage you to express any special requirement your child might benefit from.<br/><br/>
                        We also invite you to get in touch as often as you’d like, whether to discuss the progress
                        reports or chat with one of our dedicated staff members.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box borderRadius='53px' overflow='hidden'>
                        <ResizableImage src={'/programPage/participationEncoragement.png'}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ParticipationEncouragementFrame;