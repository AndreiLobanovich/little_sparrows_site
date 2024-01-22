import {CssBaseline} from "@mui/material";
import MoreThanLearningFrame from "./MoreThanLearningFrame";
import FoodFrame from "./FoodFrame";
import SampleMenuFrame from "./SampleMenuFrame";
import CardsFrameTop from "./СardsFrameTop";
import EnrollFrame from "../elements/EnrollFrame";
import HeroSection from "../elements/HeroFrame";
import React from "react";
import FutureStartFrame from "./FutureStartFrame";
import Footer from "../elements/Footer";

const ApproachPage: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={
                    <>
                        Growing up, as it<br/> should be
                    </>
                }
                secondaryTitle={'Little Sparrows is a language-immersive, nurturing kindergarten where smiles ' +
                    'and laughter go hand-in-hand with learning.'}
                buttonText={'RESERVE A SPOT'}
                buttonOnClickPath={'/enroll'}
                underButtonText={'Limited slots available.'}
            />
            <MoreThanLearningFrame/>
            <FutureStartFrame/>
            <FoodFrame/>
            <SampleMenuFrame/>
            <CardsFrameTop/>
            <EnrollFrame/>
            <Footer/>
        </>
    )
}

export default ApproachPage;