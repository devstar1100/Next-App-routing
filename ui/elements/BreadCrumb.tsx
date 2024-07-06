"use client";

import Link from "next/link";

interface BreadCrumbProps {
  rootsArray: {    
    href: string,
    title?: string,
    icon?: any
  }[],
  dividerIcon?: React.ReactNode
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ 
  rootsArray, 
  dividerIcon = "/" 
}) => {
  return (
    <div className="flex items-center text-gray-700">
      { rootsArray && rootsArray.map((root, index: number) => {
        return (
          <div
            key={index}
          >
            <Link
              className="flex items-center"
              href={root.href}
            >
              {index !== 0 && <p className="mx-2">{dividerIcon}</p>}
              {root.icon && <root.icon />}
              {rootsArray.length > 1 ? (
                 index !== 0 && <p>{root.title}</p>
                ) : <p className="mx-2">{root.title}</p>
              }
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default BreadCrumb;