"use client";

import { FlagIcon, FlagIconCode } from "react-flag-kit";
import { Avatar, Dropdown } from "flowbite-react";
import { useState } from "react";
import { userCountries } from "../../../utiles/constants";

const Header = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    countryName: "United State", 
    code: "US" as FlagIconCode
  }); 

  return (
    <>
      <div className="flex justify-end items-center border-b p-5">
        <div className="px-10 max-sm:hidden">
          <Dropdown 
            label={
              <>
                <FlagIcon
                  className="mr-2"
                  code={selectedCountry.code}
                />
                { selectedCountry.countryName }
              </> 
            } 
            inline
          >
            {userCountries.map((userCountry, index) => {
              return (
                <div key={index}>
                  <Dropdown.Item
                    onClick={() => setSelectedCountry(userCountry)}
                  >
                    <FlagIcon
                      className="mr-2"
                      code={userCountry.code} 
                    />
                    {userCountry.countryName}
                  </Dropdown.Item>
                </div>
              )
            })}
          </Dropdown>
        </div>
        <div>
          <Avatar 
            className="px-10"
            img="" 
            rounded
          >
            <div className="space-y-1 font-medium dark:text-white">
              <div>Jese Leos</div>
            </div>
          </Avatar>
        </div>
      </div>
    </>
  );
}

export default Header;