import {CssBaseline} from "@mui/material";
import EnrollFrame from "../elements/EnrollFrame";
import GrowthFoundationsFrame from "./GrowthFoundationsFrame";
import GoodFrame from "./GoodFrame";
import FutureStepsFrame from "./FutureStepsFrame";
import HeroSection from "../elements/HeroFrame";
import React from "react";
import CambridgeFrame from "../elements/CambridgeFrame";
import Footer from "../elements/Footer";

const NurceryPage: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={
                    <>
                        Peace of mind for parents, playful growth for children
                    </>
                }
                secondaryTitle={
                    <>
                        Being away from your little one gets a little easier knowing your child is in a safe and loving
                        environment.
                    </>
                }
                backgroundImageUrl="/nurseryPage/nurceryBackground.jpg"
                buttonOnClickPath={'/nursery'}
                buttonText={'RESERVE A SPOT'}
                underButtonText={'Limited spots available'}
            />
            <CambridgeFrame/>
            <GrowthFoundationsFrame/>
            <GoodFrame/>
            <FutureStepsFrame/>
            <EnrollFrame/>
            <Footer/>
        </>
    )
}

export default NurceryPage;