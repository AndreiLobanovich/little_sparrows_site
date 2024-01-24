import {ThemeProvider} from '@mui/material/styles';
import theme from './elements/Theme';
import './assets/fonts.css';
import 'normalize.css';
import MainPage from "./mainPage/MainPage";
import React from "react";
import {Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import ApproachPage from './approachPage/ApproachPage';
import ProgramPage from "./programPage/ProgramPage";
import PricingPage from "./pricingPage/PricingPage";
import NurceryPage from "./enrollPage/EnrollPage";
import EnrollPage from "./enrollPage/EnrollPage";

const history = createBrowserHistory();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Route exact path="/" component={MainPage}/>
                <Route path="/approach" component={ApproachPage}/>
                <Route path="/our-program" component={ProgramPage}/>
                <Route path="/pricing" component={PricingPage}/>
                <Route path="/nursery" component={NurceryPage}/>
                <Route path="/enroll" component={EnrollPage}/>
            </Router>
        </ThemeProvider>
    );
}

export default App;
