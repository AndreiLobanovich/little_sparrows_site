import {CssBaseline} from "@mui/material";
import StarFrame from "../elements/StarFrame";
import VideoFrame from "./VideoFrame";
import ReserveNPricingLinkFrame from "./ReserveNPricingLinkFrame";
import EuropesOnlyFrame from "./EuropesOnlyFrame";
import PartOfCambridgeFrame from "./PartOfCambridgeFrame";
import NurseryFrame from "./NurseryFrame";
import ReviewFrame from "./ReviewFrame";
import EnrollFrame from "../elements/EnrollFrame";
import HeroSection from "../elements/HeroFrame";
import React from "react";
import CambridgeFrame from "../elements/CambridgeFrame";
import CardsFrame from "./CardsFrame";
import Footer from "../elements/Footer";

const MainPage: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={
                    <>
                        Give your child a head<br/> start in life
                    </>
                }
                secondaryTitle={
                    <>
                        ✅ A caring atmosphere where children feel at home<br/>
                        ✅ A multicultural, language-immersive environment,<br/>
                        ✅ A world-leading preschool academic program
                    </>
                }
                backgroundImageUrl="/mainPage/homeBG.JPG"
                buttonOnClickPath={'/enroll'}
                buttonText={'RESERVE A SPOT'}
                underButtonText={'It only takes two minutes!'}
            />
            <StarFrame/>
            <CambridgeFrame/>
            <VideoFrame/>
            <ReserveNPricingLinkFrame/>
            <EuropesOnlyFrame/>
            <CardsFrame/>
            <PartOfCambridgeFrame/>
            <NurseryFrame/>
            <ReviewFrame/>
            <EnrollFrame/>
            <Footer/>
        </>
    )
}

export default MainPage;