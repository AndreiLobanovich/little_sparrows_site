import React from "react";
import theme from "./Theme";
import {Box, Typography} from "@mui/material";

const FooterFrame: React.FC = () => {
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            paddingTop: '30px',
            flexDirection: 'column',
        }}>
            <Box sx={{flexGrow: 1}}/>
            <Typography variant={'h6'} sx={{ paddingLeft: '46px', paddingRight: '46px', color: theme.palette.secondary.dark}}>
                LITTLE SPARROWS <br/> BELGRADE
            </Typography>

        </Box>
    )
}

export default FooterFrame;

