import {CssBaseline} from "@mui/material";
import FooterFrame from "../elements/FooterFrame";
import TopFrame from "./TopFrame";
import EnrollFormFrame from "./EnrollFormFrame";

const NurceryPage: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <TopFrame/>
            <EnrollFormFrame/>
            <FooterFrame/>
        </>
    )
}

export default NurceryPage;