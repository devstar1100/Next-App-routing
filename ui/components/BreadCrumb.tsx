"use client";

import { Breadcrumb } from "flowbite-react";
import { sideList } from "@/utils/constants";

interface BreadCrumbProps {
  paramsArray: string[],
  main?: string;
}

const findIconByHref = (href: string) => {
  const item = sideList.find(item => item.href === href);
  return item ? item.icon : null;
}

const CustomBreadCrumb: React.FC<BreadCrumbProps> = ({ paramsArray }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {paramsArray.map((param, index) => {
        const href = `/${param}`;
        const Icon = findIconByHref(href);
        
        return (
          param !== "" ?
          <Breadcrumb.Item key={index} href={href} icon={Icon ? Icon : undefined}>
            {param}
          </Breadcrumb.Item> : null
        )
      })}
    </Breadcrumb>
  );
}

export default CustomBreadCrumb;