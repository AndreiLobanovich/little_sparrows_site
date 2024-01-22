import {CssBaseline} from "@mui/material";
import SkillFrame from "./SkillFrame";
import PreschoolProgramsFrame from "./PreschoolProgramsFrame";
import DifferenceFrame from "./DifferenceFrame";
import LangProgramFrame from "./LangProgramFrame";
import ClassCardTopFrame from "./ClassCardTopFrame";
import EduFoundationFrame from "./EduFoundationFrame";
import ParticipationEncouragementFrame from "./ParticipationEncouragementFrame";
import EnrollFrame from "../elements/EnrollFrame";
import HeroSection from "../elements/HeroFrame";
import React from "react";
import CambridgeFrame from "../elements/CambridgeFrame";
import Footer from "../elements/Footer";

const ProgramPage: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <HeroSection
                mainTitle={
                    <>
                        Who says learning shouldn’t be fun?
                    </>
                }
                secondaryTitle={
                    <>
                        Our diverse mix of languages, arts, sports, and other activitieshelps your child unlock their
                        talents and grow through play.
                    </>
                }
                backgroundImageUrl="/programPage/programPageBackground.jpg"
                buttonOnClickPath={'/enroll'}
                buttonText={'RESERVE A SPOT'}
                underButtonText={'It only takes two minutes!'}
            />
            <CambridgeFrame/>
            <SkillFrame/>
            <PreschoolProgramsFrame/>
            <DifferenceFrame/>
            <LangProgramFrame/>
            <ClassCardTopFrame/>
            <EduFoundationFrame/>
            <ParticipationEncouragementFrame/>
            <EnrollFrame/>
            <Footer/>
        </>
    )
}

export default ProgramPage;