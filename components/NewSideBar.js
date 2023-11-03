import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import AuthContext from "./Context";
import { RiCloseFill } from "react-icons/ri";

const NewSidebar = ({ children }) => {
  const { sideBar, setSidebar } = useContext(AuthContext);
  return (
    <div className="flex flex-col h-100 w-100">
      {sideBar && (
        <div className="flex w-full flex-col relative">
          <div className="fixed z-20 w-20 p-4 h-screen bg-white border-r-[1px] flex flex-col justify-between">
            <div className="flex flex-col h-full items-center">
              <Link href="/">
                <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                  <RxSketchLogo size={20} />
                </div>
              </Link>
              <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
              <Link href="/">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <RxDashboard size={20} />
                </div>
              </Link>
              <Link href="/user">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <RxPerson size={20} />
                </div>
              </Link>
              <Link href="/orders">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <HiOutlineShoppingBag size={20} />
                </div>
              </Link>
              <Link href="/">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                  <FiSettings size={20} />
                </div>
              </Link>
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer flex items-center justify-center rounded-lg">
              <RiCloseFill
                className="cursor-pointer"
                size={28}
                onClick={() => setSidebar(false)}
              />
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "calc(100% - 80px)",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
              opacity: ".5",
              zIndex: 9999,
              color: "#fff",
            }}
          ></div>
        </div>
      )}
      <main className={`w-full h-full`}>{children}</main>
    </div>
  );
};

export default NewSidebar;
