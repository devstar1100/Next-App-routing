'use client';

import React, { MouseEventHandler } from "react";
import { Button } from "flowbite-react";

interface CustomButtonProps {
  style: string;
  title?: string;
  icon?: any;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  style, 
  title, 
  icon, 
  onClick 
}) => {
  return (
    <>
      <div className="px-2">
        <Button 
          className={`w-full h-11 button ${style}`}
          onClick={onClick}
        >
          <div className="flex justify-center items-center">
            {icon}
            { title && 
                icon ?
                <div className="mx-2 max-md:hidden">
                  {title}
                </div> :
                <div className="mx-2">
                  {title}
                </div>
            }
            
          </div>
        </Button>
      </div>
    </>
  )
}