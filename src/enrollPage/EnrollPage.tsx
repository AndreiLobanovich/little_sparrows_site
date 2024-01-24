import {CssBaseline} from "@mui/material";
import HeroSection from "../elements/HeroFrame";
import EnrollFormFrame from "./EnrollFormFrame";
import EnrollFrame from "../elements/EnrollFrame";
import Footer from "../elements/Footer";

const NurceryPage: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={'Reserve a spot in just two minutes'}
                secondaryTitle={
                    <>
                        Enroll your child in continental Europe’s only kindergarten and nurseryholding the Cambridge
                        International School Early Years certification.

                    </>
                }
            />
            <EnrollFormFrame/>
            <EnrollFrame/>
            <Footer/>
        </>
    )
}

export default NurceryPage;