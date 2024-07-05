'use client'

import { usePathname } from 'next/navigation';
import BreadCrumb from '@/ui/elements/BreadCrumb';
import { sideList } from '@/utils/constants';
import { useContext, useEffect, useState } from 'react';
import { PageNameContext } from '../components/PageNameContext';

interface Root {
  href: string
  content: string
}

export const Panel = ({ Action, children }: { 
  Action?: React.ReactNode, 
  children: React.ReactNode 
}) => {
  const params = usePathname();
  const splitedUrl = params.split("/");
  const mainRoot = sideList.find(item => item.href === "/" + splitedUrl[1]);
  const [ rootsArray, setRootsArray ] = useState<Root[]>()
  const context = useContext(PageNameContext);

  if (context === undefined) {
    throw new Error('Panel must be used within a MyProvider');
  }

  const { value } = context;

  useEffect(() => {
    const updatedRootsArray = splitedUrl
      .filter(segment => segment !== "" && "/" + segment !== mainRoot?.href)
      .map((segment, index) => {
        if(index >= 1)
          return ({
            href: `/${splitedUrl.slice(1, index + 2).join("/")}`,
            content: segment
          })
        else
          return ({
            href: `/${splitedUrl.slice(1, index + 2).join("/")}/${value}`,
            content: value
          })
      });

    setRootsArray(updatedRootsArray);
  }, [])
  
  return (
    <>
      <div className="flex justify-between items-center py-10">
        <BreadCrumb
          mainRoot={mainRoot}
          rootsArray={rootsArray}
        />
        {Action}
      </div>
      {children}
    </>
  )
}