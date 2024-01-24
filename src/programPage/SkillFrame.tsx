import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";

const SkillFrame: React.FC = () => {
    const skills = [
        '✅ Develop critical life skills',
        '✅ Adopt healthy habits',
        '✅ Become multilingual',
        '✅ Make first friendships',
        '✅ Discover unique talents',
        '✅ Fall in love with learning'
    ];
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            px: isMobile ? '20px' : '73px',
            py: '5vh'
        }}>
            <Typography variant='h3' textAlign='center' gutterBottom>
                Our programs are designed to help your child:
            </Typography>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Grid container spacing={5}>
                    {skills.map((skill, index) =>
                        <Grid item sm={4}>
                            <Typography variant='h3'>
                                {skill}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    )
}

export default SkillFrame;