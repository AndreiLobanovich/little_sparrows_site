import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import theme from "../elements/Theme";
import OrangeHighlightButton from "../elements/OrangeHighlightButton";

const PricingFrame: React.FC = () => {
    let [groupState, setGroupState] = React.useState(false)
    const handleClick = (value: boolean) => {
        setGroupState(value)
    };
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            padding: isMobile ? '20px' : '73px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '49%',
                    padding: '15px'
                }}>
                    <OrangeHighlightButton
                        onClick={() => handleClick(false)}
                        sx={{
                            width: '100%',
                            height: '10vh',
                            backgroundColor: groupState ? theme.palette.primary.main : theme.palette.secondary.main
                        }}>
                        <Typography variant={'h3'} color={'black'}>
                            English groups
                        </Typography>
                    </OrangeHighlightButton>
                    <Box sx={{minHeight: '2vh'}}/>
                    <Box
                        sx={{display: 'flex', flexDirection: 'column'}}
                        borderRadius={'55px'}
                        textAlign={'left'}
                        border={5}
                        p={2}
                        borderColor={theme.palette.secondary.main}
                        mx='auto'
                    >
                        <Typography variant={'h3'} textAlign={'center'}>
                            Standart package
                        </Typography>
                        <Typography variant={'h4'} textAlign={'center'}>
                            A full-day English-speaking program with native speakers as teachers and:
                        </Typography>
                        {groupState ?
                            <Typography variant={'h4'} textAlign={'center'}>
                                Two PE classes per week<br/>
                                Two music lessons per week<br/>
                                One karate lesson per week<br/>
                                One ballet lesson per week<br/>
                                One pottery lesson per week<br/>
                                One German (or Serbian) language lesson per week<br/>
                                Four nutritious meals per day<br/>
                                Two dental checkups per year<br/>
                                Two to three medical checkups per year<br/>
                                Free accident insurance<br/>
                                Regular progress reports<br/>
                                8:00-17:30 working hours, all-year-long<br/>
                            </Typography> :
                            <Typography variant={'h4'} textAlign={'center'}>
                                Two music lessons per week<br/>
                                One karate lesson per week<br/>
                                One ballet lesson per week<br/>
                                One pottery lesson per week<br/>
                                Three to five English language lessons per week (by age group)<br/>
                                Four nutritious meals per day<br/>
                                Two dental checkups per year<br/>
                                Two to three medical checkups per year<br/>
                                Free accident insurance<br/>
                                Regular progress reports<br/>
                                8:00-17:30 working hours, all-year-long<br/>
                            </Typography>
                        }


                    </Box>
                </Box>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '49%',
                    padding: '15px'
                }}>
                    <OrangeHighlightButton
                        onClick={() => handleClick(true)}
                        sx={{
                            width: '100%',
                            height: '10vh',
                            backgroundColor: groupState ? theme.palette.secondary.main : theme.palette.primary.main
                        }}>
                        <Typography variant={'h3'} color={'black'}>
                            Russian groups
                        </Typography>
                    </OrangeHighlightButton>
                    <Box sx={{minHeight: '2vh'}}/>
                    <Box
                        sx={{display: 'flex', flexDirection: 'column'}}
                        borderRadius={'55px'}
                        textAlign={'left'}
                        border={5}
                        p={2}
                        width={'100%'}
                        borderColor="orange"
                        mx='auto'
                    >
                        <Typography variant={'h3'} textAlign={'center'}>
                            Optional offers
                        </Typography>
                        <Typography variant={'h4'} textAlign={'center'}>
                            Friday night pajama parties<br/>
                            Two swimming lessons per week<br/>
                            Extended stay (17:30-19:00), if needed<br/>
                            Half-day stays, subject to capacity<br/>
                            Three-day stays, subject to capacity<br/>
                            Field trips, potentially with the parents<br/>
                        </Typography>

                    </Box>
                    <Box sx={{height: '2vh'}}/>
                    <Box
                        sx={{backgroundColor: theme.palette.secondary.main}}
                        borderRadius={'55px'}
                        textAlign={'left'}
                        border={5}
                        p={2}
                        borderColor={theme.palette.secondary.main}
                        mx='auto'
                        width={'100%'}
                    >
                        <Typography variant={'h3'} color={'white'} textAlign={'center'}>
                            Monthly tuition fees: {groupState ? 650 : 800} EUR
                        </Typography>
                    </Box>
                    <Box sx={{height: '2vh'}}/>
                    <Typography fontWeight={700} textAlign={'center'}>
                        No hidden or application fees<br/>
                        A 5% discount for yearly advance payments<br/>
                        A 5% discount for siblings<br/>
                        Tuition can be paid by a legal entity<br/>
                    </Typography>
                </Box>
            </Box>
            <Typography variant={'h5'} color={theme.palette.secondary.main} textAlign={'center'}>
                NOTE: The educational packages for the children in the nursery group are adjusted according
                to their age.
            </Typography>
        </Box>

    )
}

export default PricingFrame;
