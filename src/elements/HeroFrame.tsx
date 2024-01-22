import React, {ReactNode, useEffect, useState} from 'react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import {useHistory} from 'react-router-dom';
import NavBar from '../elements/NavBar';
import BackgroundImage from '../elements/BackgroundImage';
import OrangeHighlightButton from '../elements/OrangeHighlightButton';
import theme from '../elements/Theme';

interface HeroSectionProps {
    mainTitle: ReactNode;
    secondaryTitle: ReactNode;
    buttonText?: string;
    underButtonText?: string;
    buttonOnClickPath?: string;
    backgroundImageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = (
    {
        mainTitle,
        secondaryTitle,
        buttonText,
        buttonOnClickPath,
        backgroundImageUrl,
        underButtonText
    }
) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    let history = useHistory();
    const [chosenBirdUrl, setChosenBirdUrl] = useState('');
    const [side, setSide] = useState<'left' | 'right'>('left');
    useEffect(() => {
        const birdUrls = ['/birds/yellow.png', '/birds/blue.png', '/birds/red.png'];
        setChosenBirdUrl(birdUrls[Math.floor(Math.random() * birdUrls.length)]);
        setSide(Math.random() > 0.5 ? 'left' : 'right');
    }, []);
    const handleClick = (path?: string) => {
        if (path) {
            history.push(`/${path}`);
        }
    };
    const textColor = theme.palette.text;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BackgroundImage imageUrl={backgroundImageUrl}>
                <NavBar textColor={backgroundImageUrl ? 'white' : 'black'}/>
                {!backgroundImageUrl &&
                    <img
                        src={chosenBirdUrl}
                        alt="Описание"
                        style={{
                            position: 'absolute',
                            transform: side === 'left' ?
                                'translate(-80%, 65%) scaleX(-1) rotate(-30deg)' :
                                'translate(185%, 50%) rotate(-30deg)',
                            width: '40%',
                            height: 'auto',
                        }}
                    />
                }
                <Box
                    sx={{
                        mx: 'auto',
                        my: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'fit-content',
                        height: '100vh'
                    }}
                >
                    <Typography
                        variant={'h1'}
                        color={backgroundImageUrl ? theme.palette.text.secondary : theme.palette.secondary.main}
                        lineHeight={1.05}
                        gutterBottom
                    >
                        {mainTitle}
                    </Typography>
                    <Typography
                        variant={'h3'}
                        width={isMobile ? '100%' : '95%'}
                        color={backgroundImageUrl ? textColor.secondary : textColor.primary}
                        sx={{fontWeight: 700}}
                    >
                        {secondaryTitle}
                    </Typography>
                    {buttonText && buttonOnClickPath && (
                        <Box sx={{height: '5vh'}}/>
                    )}
                    {buttonText && buttonOnClickPath && (
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <OrangeHighlightButton onClick={() => handleClick(buttonOnClickPath)}>
                                <Typography variant='h3' color={theme.palette.text.secondary}>
                                    {buttonText}
                                </Typography>
                            </OrangeHighlightButton>
                            <Typography
                                variant='h5'
                                color={backgroundImageUrl ? textColor.secondary : textColor.primary}
                            >
                                {underButtonText}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </BackgroundImage>
        </Box>
    );
}

export default HeroSection;
