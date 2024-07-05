"use client";

import { Breadcrumb } from "flowbite-react";
import { useContext } from "react";

interface BreadCrumbProps {
  rootsArray?: {    
    content: string,
    href: string,
  }[]
  mainRoot: any
}
useContext

const BreadCrumb: React.FC<BreadCrumbProps> = ({ mainRoot, rootsArray }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {  }
      <Breadcrumb.Item 
        className="capitalize"
        icon={mainRoot.icon}
        href={mainRoot.href} 
      >
        { rootsArray?.length === 0 && mainRoot.content}
      </Breadcrumb.Item>
      { rootsArray && rootsArray.map((root, index) => {
        return (
          <Breadcrumb.Item 
            key={index}
            href={root.href}
          >
            {root.content}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  );
}

export default BreadCrumb;