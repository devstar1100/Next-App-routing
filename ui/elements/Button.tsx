'use client';

import React from "react";
import { Button as FlowbiteButton } from "flowbite-react";
import type { ButtonType } from "@/utils/types"

export const Button: React.FC<ButtonType> = ({
  style,
  title,
  icon,
  disabled = false,
  onClick
}) => {
  return (
    <>
      <div className="px-2">
        <FlowbiteButton
          className={`w-full h-full button ${style}`}
          disabled = {disabled}
          onClick={onClick}
        >
          <div className="flex justify-center items-center">
            {icon}
            {title &&
              <div 
                className={
                  icon ? 
                  "mx-2 max-md:hidden" : 
                  "mx-2"
                }
              >
                {title}
              </div>
            }
          </div>
        </FlowbiteButton>
      </div>
    </>
  )
}