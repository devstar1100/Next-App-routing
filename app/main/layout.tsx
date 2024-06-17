"use client";

import Header from '@/app/ui/layouts/header';
import SideBar from '../ui/layouts/sideBar';
import CustomBreadCrumb from '../ui/components/BreadCrumb';
import { usePathname } from 'next/navigation';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const params = usePathname();
  const baseUrl = "/main/";
  const url = params.substring(baseUrl.length);

  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBar />
        <div className="w-full">
          <Header />
          <div className="flex items-center p-10">
            <CustomBreadCrumb
              param={url}
              main=""
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}