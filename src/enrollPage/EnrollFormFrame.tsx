import React, {useState} from 'react';
import {
    Box,
    TextField,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel, Typography
} from '@mui/material';
import theme from "../elements/Theme";
import emailjs from '@emailjs/browser';
import OrangeHighlightButton from "../elements/OrangeHighlightButton";


const EnrollFormFrame: React.FC = () => {

    const [formValues, setFormValues] = useState({
        childName: '',
        childGender: '',
        childBirthday: '',
        parentName: '',
        phone: '',
        email: '',
        comments: '',
        educationLevel: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.init('0VR9T4-49oj__IUhF')
        emailjs.sendForm(
            'service_xq5kl2c',
            'template_l1gjrmc',
            event.currentTarget,
            '0VR9T4-49oj__IUhF')
            .then(() => {setIsSubmitted(true)})
    };


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '46px',
                backgroundColor: theme.palette.primary.main,
                alignItems: 'center',

            }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: 4,
                    borderRadius: '55px',
                    border: `5px solid ${theme.palette.secondary.main}`,
                    width: '80%',
                    '& .MuiTextField-root': {
                        margin: '8px 0',
                        '&.Mui-focused': {
                            color: 'black', // or any color you want for the focused state
                        },
                    },
                    '& .MuiButton-root': {marginTop: '16px'},
                    '& .MuiFormControlLabel-root': {display: 'block', margin: '8px 0'},
                    '& .MuiRadio-root': {
                        color: theme.palette.secondary.main,
                        '&.Mui-checked': {
                            color: theme.palette.secondary.main,
                        },
                        '&.Mui-focused': {
                            color: 'black', // or any color you want for the focused state
                        },
                    },
                    '& .MuiTypography-root': {
                        color: theme.palette.text.primary,
                    },
                    '& .MuiInputBase-input': {
                        color: theme.palette.text.primary,
                    },
                    '& .MuiFormLabel-root': {
                        color: theme.palette.text.primary,
                        '&.Mui-focused': {
                            color: theme.palette.text.primary,
                        },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.secondary.main,
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.secondary.main,
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.secondary.main,
                    },
                }}
            >
                <TextField
                    fullWidth
                    name="childName"
                    label="Your child's full name"
                    variant="outlined"
                    value={formValues.childName}
                    onChange={handleInputChange}
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Your child's gender</FormLabel>
                    <RadioGroup row name="childGender" onChange={handleRadioChange}>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    </RadioGroup>
                </FormControl>
                <TextField
                    fullWidth
                    name="childBirthday"
                    label="Your child's birthday"
                    variant="outlined"
                    value={formValues.childBirthday}
                    onChange={handleInputChange}
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Education Level</FormLabel>
                    <RadioGroup name="educationLevel" onChange={handleRadioChange}>
                        <FormControlLabel value="nursery" control={<Radio/>} label="Nursery: 1-3 years old"/>
                        <FormControlLabel value="ey1" control={<Radio/>} label="EY 1: 3-4 years old"/>
                        <FormControlLabel value="ey2" control={<Radio/>} label="EY 2: 4-5 years old"/>
                        <FormControlLabel value="ey3" control={<Radio/>} label="EY 3: 5-6 years old"/>
                    </RadioGroup>
                </FormControl>
                <TextField
                    fullWidth
                    name="parentName"
                    label="Your full name"
                    variant="outlined"
                    value={formValues.parentName}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    name="phone"
                    label="Your phone"
                    variant="outlined"
                    value={formValues.phone}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    name="email"
                    label="Your email"
                    variant="outlined"
                    value={formValues.email}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="comments"
                    label="Special requirements or comments"
                    variant="outlined"
                    value={formValues.comments}
                    onChange={handleInputChange}
                />
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    {!isSubmitted ? (
                        <OrangeHighlightButton type="submit">
                            SUBMIT
                        </OrangeHighlightButton>
                    ) : (<Typography variant={'h5'}>Thank you for your submission!</Typography>)}
                </Box>
            </Box>
        </Box>
    )
}

export default EnrollFormFrame;