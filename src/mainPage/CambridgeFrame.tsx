import React from "react";
import {Box, Typography} from "@mui/material";
import theme from "../elements/Theme";
import ResizableImage from "../elements/ResizableImage";

const CambridgeFrame: React.FC = () => {
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            flexDirection: 'column',
            padding: '46px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '45%'
                }}>
                    <Typography variant={'h2'} sx={{fontWeight: 700}}>
                        Continental Europe’s only
                        kindergarten and nursery with
                        Cambridge International School
                        Early Years certification.
                    </Typography>
                    <Typography variant={'h4'}  sx={{fontWeight: 400}}>
                        Educational program accredited and certified by
                        the Ministry of Education of the Republic of Serbia.
                    </Typography>
                </Box>
                <Box sx={{width: '30%'}}>
                    <ResizableImage src={'/cambridge.png'} width={'100%'} height={200}/>
                    <ResizableImage src={'/minProsvete.png'} width={700} height={200} verticalMargin={10}/>
                </Box>
            </Box>
            <Box sx={{height: '20vh'}}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '55%'
                }}>
                    <Typography
                        variant={'h3'}
                        sx={{color: theme.palette.secondary.main, lineHeight: '1.1'}}>
                        Welcome to Little Sparrows
                    </Typography>
                    <Typography
                        variant={'h2'}
                        sx={{color: theme.palette.secondary.main, lineHeight: '1.1'}}>
                        Where top-tier education meets heartfelt care
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CambridgeFrame;