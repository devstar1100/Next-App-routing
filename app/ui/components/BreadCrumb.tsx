"use client";

import { Breadcrumb } from "flowbite-react";
import { Home } from "lucide-react";

interface BreadCrumbProps {
  param: string | string[],
  main?: string;
}

const CustomBreadCrumb: React.FC<BreadCrumbProps> = ({ param }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" icon={Home}>
        Accessibit
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Main
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {param}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default CustomBreadCrumb;