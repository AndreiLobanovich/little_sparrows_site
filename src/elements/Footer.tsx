import React from "react";
import theme from "../elements/Theme";
import {Box, Grid, Typography, useMediaQuery} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import SocialMediaIcon from "./SocialMediaIcon";
import {Telegram, WhatsApp} from "@mui/icons-material";
import ResizableImage from "./ResizableImage";

const Footer: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '20vh'
            }}
        >
            <Grid container>
                <Grid item xs={12} md={6} px={isMobile ? '20px' : '73px'} sx={{
                    backgroundColor: theme.palette.secondary.main,
                }}>
                    <Typography variant='h3' fontWeight={800} color='white' mt={5}>
                        Where your child's future starts
                    </Typography>
                    <Typography variant='h5' color='white' fontWeight='400'>
                        Feel free to get in touch to learn more about our approach, program, and pricing -
                        or to schedule an in-person tour of our Vračar, Belgrade primary school facilities.
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', color: 'info.main'}}>
                        <LocalPhoneIcon/>
                        <Typography variant='h5' color='white' fontWeight={700} ml={2}>
                            +381 61 614 0475
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', color: 'info.main'}}>
                        <LocalPhoneIcon/>
                        <Typography variant='h5' color='white' fontWeight={700} ml={2}>
                            +381 11 4062 837
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', color: 'info.main'}}>
                        <EmailIcon/>
                        <Typography variant='h5' color='white' fontWeight={700} ml={2}>
                            office@kindergarten-littlesparrows.com
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', color: 'info.main'}}>
                        <LocationOnIcon/>
                        <Typography variant='h5' color='white' fontWeight={700} ml={2}>
                            Kornelija Stankovića 19, Beograd 11000, Serbia
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', color: 'info.main'}}>
                        <LocationOnIcon/>
                        <Typography variant='h5' color='white' fontWeight={700} ml={2}>
                            Radoslava Grujića 7, Beograd 11000, Serbia
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 5}}>
                        <SocialMediaIcon href={'https://www.instagram.com/littlesparrows.kindergarten/'}>
                            <InstagramIcon color={'info'} fontSize={'large'}/>
                        </SocialMediaIcon>
                        <SocialMediaIcon href={'https://t.me/+381616140475'}>
                            <Telegram color={'info'} fontSize={'large'}/>
                        </SocialMediaIcon>
                        <SocialMediaIcon href={'https://wa.me/381616140475'}>
                            <WhatsApp color={'info'} fontSize={'large'}/>
                        </SocialMediaIcon>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} order={isMobile ? -1 : 1}>
                    <iframe
                        title='map'
                        src="https://www.google.com/maps/embed/v1/place?q=19,+Kornelija+Stankovica+Street,+Belgrade,+Serbia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&language=en"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                    />
                </Grid>
            </Grid>

            <Box sx={{
                backgroundColor: theme.palette.secondary.dark,
                display: 'flex',
                flexDirection: 'row',
                px: isMobile ? '20px' : '73px',
                height: '100px',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                {!isMobile && (
                    <>
                        <ResizableImage src={'/eralyYearsCambridgeFooter.png'}/>
                        <ResizableImage src={'/anotherCambridgeFooter.png'}/>
                        <ResizableImage src={'/gerbSerb.png'}/>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default Footer;
