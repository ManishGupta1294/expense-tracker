import React from "react";
import { Link } from "react-router-dom";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import {
  Category,
  Dashboard,
  Payments,
  Settings,
  SupportAgent,
  Wallet,
} from "@mui/icons-material";

function SideNav() {
  return (
    <>
      <div>
        <Heading title="ET" cssClass="text-white" />
      </div>

      <div className="my-10">
        <SubHeading title="main menu" cssClass="uppercase text-medium-blue" />
        <div className="my-4 text-white">
          <ul>
            <Link to="/layout/dashboard">
              <li className="cursor-pointer flex items-center px-2 py-2 my-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 ease-in rounded-[6px]">
                <Dashboard className="mr-2" />
                <span className="select-none">Dashboard</span>
              </li>
            </Link>
            <Link to="/layout/wallet">
              <li className="cursor-pointer flex items-center px-2 py-2 my-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 ease-in rounded-[6px]">
                <Wallet className="mr-2" />
                <span className="select-none">Wallet</span>
              </li>
            </Link>
            <Link to="/layout/transcations">
              <li className="cursor-pointer flex items-center px-2 py-2 my-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 ease-in rounded-[6px]">
                <Payments className="mr-2" />
                <span className="select-none">Transcations</span>
              </li>
            </Link>
            <Link to="/layout/categories">
              <li className="cursor-pointer flex items-center px-2 py-2 my-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 ease-in rounded-[6px]">
                <Category className="mr-2" />
                <span className="select-none">Categories</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="my-10">
        <SubHeading title="Settings" cssClass="uppercase text-medium-blue" />
        <div className="my-4 text-white">
          <ul>
            <Link to="/layout/settings">
              <li className="cursor-pointer flex items-center px-2 py-2 my-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 ease-in rounded-[6px]">
                <Settings className="mr-2" />
                <span className="select-none">Settings</span>
              </li>
            </Link>
            <li className="cursor-pointer flex items-center px-2 py-2 my-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 ease-in rounded-[6px]">
              <SupportAgent className="mr-2" />
              <span className="select-none">Support</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideNav;
