import React from "react";

import {Box, Typography} from "@mui/material";
import BackgroundImage from "../elements/BackgroundImage";
import NavBar from "../elements/NavBar";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";
import {useHistory} from "react-router-dom";

const TopFrame: React.FC = () => {
    let history = useHistory();
    const handleClick = (path: string) => {
        history.push(`/${path}`)
    }
    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BackgroundImage imageUrl='/nurceryBackground.jpg'>
                <NavBar/>
                <Box sx={{ my: 'auto', mx: 'auto', p: 3, alignItems: 'center', width: 'fit-content' }}>
                    <Typography variant={'h3'} sx={{
                        color: 'white',
                        mx: 'auto',
                        my: 4,
                    }}>
                        Who says learning <br/> shouldn’t be fun?
                    </Typography>
                    <Typography sx={{fontWeight: 700, color: 'white', marginBottom: '10%'}}>
                        Our diverse mix of languages, arts, sports, and <br/>
                        other activitieshelps your child unlock their talents<br/>
                        and grow through play.
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{ flexGrow: 1 }} />
                        <OrangeHighlightButton onClick={() => handleClick('enroll')}>
                            RESERVE A SPOT
                        </OrangeHighlightButton>
                        <Box sx={{ flexGrow: 1 }} />
                    </Box>
                </Box>
            </BackgroundImage>
        </Box>
    )
}

export default TopFrame;