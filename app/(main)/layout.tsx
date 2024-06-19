"use client";

import { usePathname } from 'next/navigation';
import BreadCrumb from '@/ui/components/BreadCrumb';
import SideBar from '@/ui/layouts/SideBar';
import Header from '@/ui/layouts/Header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const params = usePathname();
  const paramsArray = params.split("/");

  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBar />
        <div className="w-full">
          <Header />
          <div className="flex items-center p-10">
            <BreadCrumb
              paramsArray={paramsArray}
              main=""
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}