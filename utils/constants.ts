import { FlagIconCode } from "react-flag-kit";
import { FileCode2, Home, LogOut, Receipt, Settings } from "lucide-react";

export const userCountries: { countryName: string; code: FlagIconCode; }[] = [
  {
    countryName: "United State",
    code: "US"
  },
  {
    countryName: "China",
    code: "CN"
  },
  {
    countryName: "Brazil",
    code: "BR"
  },
  {
    countryName: "Norway",
    code: "NR"
  },
]

export const tableData = [
  {
    id: 1,
    page: "sito.com/home",
    scan: "3 maggio 2024",
    waring: 15,
  },
  {
    id: 2,
    page: "sito.com/contact",
    scan: "3 kkk 2023",
    waring: 28,
  },
  {
    id: 3,
    page: "sito.com/about",
    scan: "3 oiu 2021",
    waring: 9,
  },
]

export const urlData = [
  {
    id: 1,
    siteurl: "dental.tempmee.com",
    license: "Obtain a license"
  },  
  {
    id: 2,
    siteurl: "www.transizionedigitable.com",
    license: "Obtain a license"
  },
]

export const sideList: { icon: any; content: string; href: string }[] = [
  {
    icon: Home,
    content: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: FileCode2,
    content: "Widget Script",
    href: "/script"
  },
  {
    icon: Receipt,
    content: "Bills and Payments",
    href: "/payment"
  },
  {
    icon: Settings,
    content: "Settings",
    href: "/settings"
  },
  {
    icon: LogOut,
    content: "Logout",
    href: "/logout"
  },
] 

