import React from "react";
import SideNav from "./Components/SideNav";
import DashboardHeader from "./Components/DashboardHeader";
import Dashboard from "./Pages/Dashboard";
import Wallet from "./Pages/Wallet";
import Transcations from "./Pages/Transcations";
import Settings from "./Pages/Settings";
import Categories from "./Pages/Categories";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* <h1>JMK</h1> */}
      <section>
        <div className="w-full flex">
          <div className="w-[280px] h-[100vh] bg-dark-blue p-4">
            <SideNav />
          </div>

          <div className="flex-1 h-[100vh]">
            <DashboardHeader />

            <div className="body_content h-[90%] p-4">
              <Outlet />
              <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="transcations" element={<Transcations />} />
                <Route path="categories" element={<Categories />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layout;
