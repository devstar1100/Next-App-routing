"use client";

import Header from '@/ui/layouts/Header';
import SideBar from '@/ui/layouts/SideBarMenu';
 
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBar />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}