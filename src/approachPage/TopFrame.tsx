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
            px: '46px',
            py: '46px',
            backgroundColor: theme.palette.primary.main,
            alignItems: 'center',
        }}>
            <Box sx={{width: '100%'}}>
                <NavBar textColor={'#000000'}/>
            </Box>
            <Box sx={{flexGrow:1}}/>
            <Box sx={{width: '50%'}}>
                <Typography variant={'h3'} color={theme.palette.secondary.main}>
                    Growing up, as it should be
                </Typography>
                <Typography variant={'h5'} width={'65%'} fontWeight={600}>
                    Little Sparrows is a language-immersive, nurturing kindergartenwhere smiles and laughter
                    go hand-in-hand with learning.
                </Typography>
            </Box>
            <Box sx={{flexGrow:1}}/>
            <OrangeHighlightButton onClick={handleClick}>
                RESERVE A SPOT
            </OrangeHighlightButton>
            <Box sx={{flexGrow:1}}/>
        </Box>
    );
}

export default TopFrame;