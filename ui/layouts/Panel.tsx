'use client'

import { usePathname } from 'next/navigation';
import BreadCrumb from '@/ui/elements/BreadCrumb';

export const Panel = ({ Action, href, children }: { 
  Action?: React.ReactNode, 
  href: {
    root: string,
    icon: React.FC,
    url?: string[]
  }, 
  children: React.ReactNode 
}) => {
  const params = usePathname();
  const paramsArray = params.split("/");

  return (
    <>
      <div className="flex justify-between items-center py-10">
        <BreadCrumb
          paramsArray={href}
        />
        {Action}
      </div>
      {children}
    </>
  )
}