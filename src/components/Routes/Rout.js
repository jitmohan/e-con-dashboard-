import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modals from "../Modals/Modals";
import LoginEcon from "../LoginEcon/LoginEcon";
import ResetPassword from "../ResetPassword/ResetPassword";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import OtpVerification from "../OtpVerification/OtpVerification";
import Dashboard from "../../pages/Dashboard";
import Users from "../../pages/Users";
import Messages from "../../pages/Messages";
import Analytics from "../../pages/Analytics";
import FileManager from "../../pages/FileManager";
import Order from "../../pages/Order";
import SideBar from "../Sidebar/SideBar";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Donut from "../Chart/Donut/Donut";

const Rout = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginEcon />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/modals" element={<Modals />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/otpVerification" element={<OtpVerification />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            {/* <Route path="/saved" element={<Saved />} /> */}
            {/* <Route path="/settings" element={<Setting />} /> */}

            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default Rout;
