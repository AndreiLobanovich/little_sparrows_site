import NavBar from "../elements/NavBar";
import React from "react";
import {Box, Typography} from "@mui/material";
import theme from "../elements/Theme";


const TopFrame: React.FC = () => {
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '46px',
            backgroundColor: theme.palette.primary.main,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box sx={{width: '100%'}}>
                <NavBar textColor={'#000000'}/>
            </Box>
            <Box sx={{flexGrow:1}}/>
            <Box sx={{width: '100%'}}>
                <Typography variant={'h3'} color={theme.palette.secondary.main} textAlign={'center'}>
                    Reserve a spot in<br/> just two minutes
                </Typography>
                <Box sx={{minHeight: '2vh'}}/>
                <Typography variant={'h5'} fontWeight={600} textAlign={'center'}>
                    Enroll your child in continental Europe’s only<br/>
                    kindergarten and nurseryholding the Cambridge<br/>
                    International School Early Years certification.
                </Typography>
            </Box>
            <Box sx={{flexGrow:1}}/>
            <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <Typography variant={'h5'} fontWeight={700} textAlign={'left'}>
                    A caring atmosphere where<br/> children feel at home
                </Typography>
                <Box sx={{flexGrow:1}}/>
                <Typography variant={'h5'} fontWeight={700} textAlign={'center'}>
                    A multicultural, language-<br/>immersive environment
                </Typography>
                <Box sx={{flexGrow:1}}/>
                <Typography variant={'h5'} fontWeight={700} textAlign={'right'}>
                    A world-leading preschool<br/> academic program
                </Typography>
            </Box>
        </Box>
    )
}

export default TopFrame;