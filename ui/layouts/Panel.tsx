'use client'

import { useEffect, useState } from 'react';
import { sideList } from '@/utils/constants';
import { usePathname } from 'next/navigation';
import BreadCrumb from '@/ui/elements/BreadCrumb';

interface Root {
  href: string,
  title?: string,
  icon?: any,
}

export const Panel = ({ Action, children, specificPath }: { 
  Action?: React.ReactNode, 
  children: React.ReactNode,
  specificPath?: {
    currentTitle: string,
    specificTitle: string
  }
}) => {
  const params = usePathname();
  const splitedUrl = params.split("/").slice(1);
  const mainRoot = sideList.find(item => item.href === "/" + splitedUrl[0]);
  const [ rootsArray, setRootsArray ] = useState<Root[]>([])

  useEffect(() => {
    const updatedRootsArray = splitedUrl
      .map((segment, index) => {
        if(index === 0) {
          return ({
            href: `/${splitedUrl.slice(0, index + 1).join("/")}`,
            icon: mainRoot?.icon,
            title: mainRoot?.content
          })
        }
        else if(segment === specificPath?.currentTitle)
          return ({
            href: `/${splitedUrl.slice(0, index + 1).join("/")}`,
            title: specificPath?.specificTitle
          })
        else
          return ({
            href: `/${splitedUrl.slice(0, index + 1).join("/")}`,
            title: segment
          })
      });
    setRootsArray(updatedRootsArray);
  }, [])

  return (
    <>
      <div className="flex justify-between items-center py-10">
        <BreadCrumb
          rootsArray={rootsArray}
        />
        {Action}
      </div>
      {children}
    </>
  )
}