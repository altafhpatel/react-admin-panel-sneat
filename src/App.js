import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/vendor/css/core.css';
import './assets/vendor/css/theme-default.css';
import './App.css';

import Dashboard from "./Components/Dashboard";

import Login from "./Components/panel/authentications/Login";
import Register from "./Components/panel/authentications/Register";
import ForgotPassword from "./Components/panel/authentications/ForgotPassword";
import Account from "./Components/panel/Account";

import HorizontalForm from "./Components/panel/HorizontalForm";
import VerticalForm from "./Components/panel/VerticalForm";
import Tables from "./Components/panel/Tables";

import BasicInputs from "./Components/panel/BasicInputs";
import GroupInputs from "./Components/panel/GroupInputs";

import Error from "./Components/panel/Error";
import UnderMaintenance from "./Components/panel/UnderMaintenance";

import UiAccordion from "./Components/panel/userinterface/UiAccordion"
import UiAlerts from "./Components/panel/userinterface/UiAlerts"
import UiBadges from "./Components/panel/userinterface/UiBadges"
import UiButtons from "./Components/panel/userinterface/UiButtons"
import UiCarousel from "./Components/panel/userinterface/UiCarousel"
import UiCollapse from "./Components/panel/userinterface/UiCollapse"
import UiDropdown from "./Components/panel/userinterface/UiDropdown"
import UiFooter from "./Components/panel/userinterface/UiFooter"
import UiListGroups from "./Components/panel/userinterface/UiListGroups"
import UiModal from "./Components/panel/userinterface/UiModal"
import UiNavbar from "./Components/panel/userinterface/UiNavbar"
import UiOffCanvas from "./Components/panel/userinterface/UiOffCanvas"
import UiPaginationBreadcrumbs from "./Components/panel/userinterface/UiPaginationBreadcrumbs"
import UiProgress from "./Components/panel/userinterface/UiProgress"
import UiSpinners from "./Components/panel/userinterface/UiSpinners"
import UiTabsPills from "./Components/panel/userinterface/UiTabsPills"
import UiToasts from "./Components/panel/userinterface/UiToasts"
import UiTooltipPopovers from "./Components/panel/userinterface/UiTooltipPopovers"
import UiTypography from "./Components/panel/userinterface/UiTypography"

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dashboard />}> </Route>


        {/* Panel Routes */}
        {/* Forms and Tables */ }
        <Route path="/panel/horizontalform" element={<HorizontalForm />}></Route>
        <Route path="/panel/verticalform" element={<VerticalForm />}></Route> 
        <Route path="/panel/tables" element={<Tables />}> </Route>

        {/* Authentication Routes */ }
        <Route path="/panel/login" element={<Login />}></Route>
        <Route path="/panel/register" element={<Register />}></Route>
        <Route path="/panel/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/panel/account" element={<Account />}></Route>

        <Route path="/panel/basicinputs" element={<BasicInputs />}></Route>
        <Route path="/panel/groupinputs" element={<GroupInputs />}></Route>

        <Route path="/panel/error" element={<Error />}></Route>
        <Route path="/panel/maintenance" element={<UnderMaintenance />}></Route>

        {/* User Interfaces */}
        <Route path="/panel/accordion" element={<UiAccordion />}></Route>
        <Route path="/panel/alerts" element={<UiAlerts />}></Route>
        <Route path="/panel/badges" element={<UiBadges />}></Route>
        <Route path="/panel/Buttons" element={<UiButtons />}></Route>
        <Route path="/panel/Carousel" element={<UiCarousel />}></Route>
        <Route path="/panel/Collapse" element={<UiCollapse />}></Route>
        <Route path="/panel/dropdown" element={<UiDropdown />}></Route>
        <Route path="/panel/footer" element={<UiFooter />}></Route>
        <Route path="/panel/listgroups" element={<UiListGroups />}></Route>
        <Route path="/panel/modal" element={<UiModal />}></Route>
        <Route path="/panel/navbar" element={<UiNavbar />}></Route>
        <Route path="/panel/offcanvas" element={<UiOffCanvas />}></Route>
        <Route path="/panel/pagination" element={<UiPaginationBreadcrumbs />}></Route>
        <Route path="/panel/progress" element={<UiProgress />}></Route>
        <Route path="/panel/spinners" element={<UiSpinners />}></Route>
        <Route path="/panel/tabspills" element={<UiTabsPills />}></Route>
        <Route path="/panel/toasts" element={<UiToasts />}></Route>
        <Route path="/panel/tooltippopovers" element={<UiTooltipPopovers />}></Route>
        <Route path="/panel/typography" element={<UiTypography />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
