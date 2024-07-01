"use client";

import { Drawer } from "flowbite-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import SideBar from "../components/SideBar";

const SideBarMenu = () => {
  const [ sideBarHandler, setSidBarHandler ] = useState(false);
  
  return (
    <>
      <div className="min-[1024px]:hidden max-lg:flex">
        {!sideBarHandler && (
          <>
            <div className="fixed left-5 top-7 z-50">
              <Menu
                className="cursor-pointer"
                onClick={() => setSidBarHandler(true)}
              />
            </div>
          </>
        )}
        <Drawer
          open={sideBarHandler} 
          onClose={() => setSidBarHandler(false)}
          theme={{
            root:  {
              base: "fixed z-40 bg-white p-2 border-0 transition-transform dark:bg-gray-800",
              position: {
                left: {
                  on: "left-0 top-0 h-screen transform-none",
                  off: "left-0 top-0 h-screen w-80 -translate-x-full"
                }
              }
            },
          }}
        >
          <div className="flex px-2 justify-end">
            <div 
              className="cursor-pointer"
              onClick={() => setSidBarHandler(false)}
            >
              &times;
            </div>
          </div>
          <SideBar />
        </Drawer>
      </div>
      <div className="flex max-lg:hidden border-r">
        <SideBar />
      </div>
    </>  
  );
}

export default SideBarMenu