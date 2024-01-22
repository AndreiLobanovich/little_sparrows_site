import {CssBaseline} from "@mui/material";
import PricingFrame from "./PricingFrame";
import EnrollFrame from "../elements/EnrollFrame";
import HeroFrame from "../elements/HeroFrame";
import Footer from "../elements/Footer";

const PricingPage: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <HeroFrame
                mainTitle={
                    <>
                        <br/>
                        The foundations of a bright future
                    </>
                }
                secondaryTitle={
                    <>
                        Our educational packages are tailored to deliver both heartfelt care and world-leading
                        preschool education.
                    </>
                }
            />
            <PricingFrame/>
            <EnrollFrame/>
            <Footer/>
        </>
    )
}

export default PricingPage;