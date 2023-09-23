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

import Error from "./Components/panel/Error";
import UnderMaintenance from "./Components/panel/UnderMaintenance";



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

        <Route path="/panel/error" element={<Error />}></Route>
        <Route path="/panel/maintenance" element={<UnderMaintenance />}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
