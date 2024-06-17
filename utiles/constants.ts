import { FileCode2, Flag, Home, LogOut, Receipt, Settings } from "lucide-react";
import { FlagIconCode } from "react-flag-kit";

export interface tableRow {
  id: number;
  page: string;
  scan: string;
  avvertenze: string;
}

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

export const tableData = {
  headers: [
    {
      title: "page",
      checkBox: true,
    },
    {
      title: "scan",
      checkBox: false,
    },
    {
      title: "avvertenze",
      checkBox: false,
    },
  ],
  data: [
    {
      id: 1,
      page: "sito.com/home",
      scan: "3 maggio 2024",
      avvertenze: "28",
    },
    {
      id: 2,
      page: "sito.com/contact",
      scan: "3 maggio 2024",
      avvertenze: "28",
    },
    {
      id: 3,
      page: "sito.com/about",
      scan: "3 maggio 2024",
      avvertenze: "28",
    },
  ]
}

export const sideList: { icon: any; content: string; href: string }[] = [
  {
    icon: Home,
    content: "Dashboard",
    href: "/main/dashboard"
  },
  {
    icon: FileCode2,
    content: "Script del Widget",
    href: "/main/script"
  },
  {
    icon: Receipt,
    content: "Fatture & Pagamenti",
    href: "/main/payment"
  },
  {
    icon: Settings,
    content: "Impostazioni",
    href: "/main/settings"
  },
  {
    icon: LogOut,
    content: "Logout",
    href: "/main/logout"
  },
] 