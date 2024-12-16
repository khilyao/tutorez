"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoupeIcon from "@assets/loupe.svg";
import Button from "@components/Button";
import Dropdown from "@components/Dropdown";
import AdminTable from "../components/AdminTable";
import { useTheme } from "@hooks/useTheme";
import DashboardMenu from "../components/DashboardMenu";

const Dashboard = () => {
  const { isThemeDark } = useTheme();

  return (
    <div className="flex">
      <DashboardMenu />
      <div className="w-calc-full-minus-96 md:w-calc-full-minus-256">
        <header className="p-4 flex flex-col md:flex-row gap-4 md:gap-0 transition-colors justify-between dark:bg-[#1D1E42]">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* <div className="flex gap-2 items-center font-montserrat font-medium text-sm">
              <span className="transition-colors dark:text-white">
                Показати
              </span>
              <Dropdown options={["10", "20", "30"]} />
              <span className="transition-colors dark:text-white">записів</span>
            </div> */}
            <div className="relative">
              <LoupeIcon className="absolute top-1/2 -translate-y-1/2 left-2 dark:text-white" />
              <input
                className="p-2 pl-8 font-montserrat transition-colors text-[#9E9E9E] border border-[#9E9E9E] focus:outline-[#9E9E9E] rounded-lg dark:border-white dark:bg-transparent dark:placeholder:text-white"
                type="text"
                placeholder="Пошук..."
              />
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <Button
              type={isThemeDark ? "purpleIcon" : "purpleDarkIcon"}
              className="dark:bg-[#fff]"
            >
              Додати студента
            </Button>
          </div>
        </header>
        <AdminTable />
      </div>
    </div>
  );
};

export default Dashboard;