"use client";

import type { SidebarProps } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import { Plus } from "lucide-react";
import { sideList } from "../../../utiles/constants";
import { CustomButton } from "../elements/Button";

const MainSideBar = (props: SidebarProps) => {

  // const customSideBarTheme: CustomFlowbiteTheme = {
  //   sidebar: {
  //     "root": {
  //       "base": "h-full",
  //       "collapsed": {
  //         "on": "w-16",
  //         "off": "w-64"
  //       },
  //       "inner": "h-full overflow-y-auto overflow-x-hidden rounded px-3 py-4 dark:bg-gray-800"
  //     },
  //     "collapse": {
  //       "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
  //       "icon": {
  //         "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
  //         "open": {
  //           "off": "",
  //           "on": "text-gray-900"
  //         }
  //       },
  //       "label": {
  //         "base": "ml-3 flex-1 whitespace-nowrap text-left",
  //         "icon": {
  //           "base": "h-6 w-6 transition delay-0 ease-in-out",
  //           "open": {
  //             "on": "rotate-180",
  //             "off": ""
  //           }
  //         }
  //       },
  //       "list": "space-y-2 py-2"
  //     },
  //     "cta": {
  //       "base": "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
  //       "color": {
  //         "blue": "bg-cyan-50 dark:bg-cyan-900",
  //         "dark": "bg-dark-50 dark:bg-dark-900",
  //         "failure": "bg-red-50 dark:bg-red-900",
  //         "gray": "bg-alternative-50 dark:bg-alternative-900",
  //         "green": "bg-green-50 dark:bg-green-900",
  //         "light": "bg-light-50 dark:bg-light-900",
  //         "red": "bg-red-50 dark:bg-red-900",
  //         "purple": "bg-purple-50 dark:bg-purple-900",
  //         "success": "bg-green-50 dark:bg-green-900",
  //         "yellow": "bg-yellow-50 dark:bg-yellow-900",
  //         "warning": "bg-yellow-50 dark:bg-yellow-900"
  //       }
  //     },
  //     "item": {
  //       "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
  //       "active": "bg-gray-100 dark:bg-gray-700",
  //       "collapsed": {
  //         "insideCollapse": "group w-full pl-8 transition duration-75",
  //         "noIcon": "font-bold"
  //       },
  //       "content": {
  //         "base": "flex-1 whitespace-nowrap px-3"
  //       },
  //       "icon": {
  //         "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
  //         "active": "text-gray-700 dark:text-gray-100"
  //       },
  //       "label": "",
  //       "listItem": ""
  //     },
  //     "items": {
  //       "base": ""
  //     },
  //     "itemGroup": {
  //       "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  //     },
  //     "logo": {
  //       "base": "mb-5 flex items-center pl-2.5",
  //       "collapsed": {
  //         "on": "hidden",
  //         "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
  //       },
  //       "img": "mr-3 h-6 sm:h-7"
  //     }
  //   }
  // }

  // const { hidden, security, ...res } = props;

  return (
    // <Flowbite theme={{ theme: customSideBarTheme }}>
      <Sidebar 
        // {...res}
        aria-label="Sidebar with logo branding example" 
        className="h-screen"
        theme={{
          root: {
            inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-white px-3 py-4 dark:bg-gray-800"
          }
        }}
      > 
        <Sidebar.Logo 
          href="#" 
          img="" 
          imgAlt="logo"
        >
          <b>Accessi</b>Bit
        </Sidebar.Logo>
        <Sidebar.Items className="mt-16">
          <Sidebar.ItemGroup>
            {sideList.map((sideOne, index) => {
              return (
                <div key={index}>
                  <Sidebar.Item 
                    // className={`hover:bg-blue-200 cursor-pointer ${
                    //   activeIndex === index ? 'bg-blue-200' : 'bg-white'
                    // }`}
                    href={sideOne.href}
                    icon={sideOne.icon}
                    // onClick={() => setActiveIndex(index)}
                  >
                    {sideOne.content}
                  </Sidebar.Item>
                </div>
              )
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <CustomButton
          style="bg-blue-800 mt-10"
          icon={<Plus/>}
          title="Aggiungi sito"
          onClick={() => {console.log("Clicked!")}}
        />
     </Sidebar>
    //  </Flowbite>
    );
}

export default MainSideBar