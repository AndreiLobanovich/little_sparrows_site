import NavBar from "../elements/NavBar";
import React from "react";
import {Box, Typography} from "@mui/material";
import theme from "../elements/Theme";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";


const TopFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push('/enroll')
    }
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '46px',
            backgroundColor: theme.palette.primary.main,
            alignItems: 'center',
        }}>
            <Box sx={{width: '100%'}}>
                <NavBar textColor={'#000000'}/>
            </Box>
            <Box sx={{flexGrow:1}}/>
            <Box sx={{width: '50%'}}>
                <Typography variant={'h3'} color={theme.palette.secondary.main}>
                    The foundations of a bright future
                </Typography>
                <Box sx={{minHeight: '2vh'}}/>
                <Typography variant={'h5'} width={'65%'} fontWeight={600}>
                    Our educational packages are tailored to deliver both heartfelt care and world-leading
                    preschool education.
                </Typography>
            </Box>
            <Box sx={{flexGrow:1}}/>
            <OrangeHighlightButton onClick={handleClick}>
                RESERVE A SPOT
            </OrangeHighlightButton>
            <Box sx={{flexGrow:1}}/>
        </Box>
    )
}

export default TopFrame;