"use client";

import type { SidebarProps } from "flowbite-react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { Plus } from "lucide-react";
import { sideList } from "@/utils/constants";
import { Button } from "../elements/Button";

const SideBar = (props: SidebarProps) => {
  return (
      <FlowbiteSidebar 
        aria-label="Sidebar with logo branding example" 
        className="h-screen"
        theme={{
          root: {
            inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-white px-3 py-4 dark:bg-gray-800"
          }
        }}
      > 
        <FlowbiteSidebar.Logo 
          className="mt-4"
          href="#" 
          img="" 
          imgAlt="logo"
        >
          <b>Accessi</b>Bit
        </FlowbiteSidebar.Logo>
        <FlowbiteSidebar.Items className="mt-12">
          <FlowbiteSidebar.ItemGroup>
            {sideList.map((sideOne, index) => {
              return (
                <div key={index}>
                  <FlowbiteSidebar.Item 
                    href={sideOne.href}
                    icon={sideOne.icon}
                  >
                    {sideOne.content}
                  </FlowbiteSidebar.Item>
                </div>
              )
            })}
          </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
        <Button
          style="bg-blue-800 mt-10"
          icon={<Plus/>}
          title="Add site"
          titleHiddenable={false}
          onClick={() => {console.log("Clicked!")}}
        />
     </FlowbiteSidebar>
    );
}

export default SideBar