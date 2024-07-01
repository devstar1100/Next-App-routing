"use client";

import { Breadcrumb } from "flowbite-react";
import { sideList } from "@/utils/constants";

interface BreadCrumbProps {
  paramsArray: {
    root: string,
    icon: React.FC,
    url?: string[]
  },
}

const findIconByHref = (href: string) => {
  const item = sideList.find(item => item.href === href);
  return item ? item.icon : null;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ paramsArray }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {  }
      <Breadcrumb.Item 
        className="capitalize"
        icon={paramsArray.icon}
        href={paramsArray.root} 
      >
        { !paramsArray.url && paramsArray.root}
      </Breadcrumb.Item>
      { paramsArray.url && paramsArray.url.map((param, index) => {
        return (
          param !== "" ?
          <Breadcrumb.Item 
            key={index}
            href={param} 
          >
            {param}
          </Breadcrumb.Item> : null
        )
      })}
    </Breadcrumb>
  );
}

export default BreadCrumb;