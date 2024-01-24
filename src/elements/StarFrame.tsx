import React from "react";
import theme from "./Theme";
import {Box, Typography, useMediaQuery} from "@mui/material";
import ResizableImage from "./ResizableImage";

const StarFrame: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            py: "15vh",
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/*birdie on the left*/}
            {!isMobile && <img src="/birds/yellow.png" alt="Описание" style={{
                position: 'absolute',
                transform: ' translate(-120%, 10%) scaleX(-1) rotate(-30deg)',
                width: '40%',
                height: 'auto',
            }}/>}
            <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '10px'}}>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
                <Box width={'2vw'}/>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
                <Box width={'2vw'}/>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
                <Box width={'2vw'}/>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
                <Box width={'2vw'}/>
                <Box width={isMobile ? '40px' : '80px'}>
                    <ResizableImage src='/star.svg'/>
                </Box>
            </Box>
            <Typography variant={'h4'} sx={{fontWeight: 400}}>
                Little Sparrows kindergarten and nursery has a
            </Typography>
            <Typography variant={'h4'} sx={{fontWeight: 800}}>
                4.9-star rating on Google.
            </Typography>
        </Box>
    );
}

export default StarFrame;