import { MouseEventHandler } from "react";

export interface TableRow {
  id: number;
  page: string;
  scan: string;
  avvertenze: number;
}

export interface ButtonType {
  title?: string;
  icon?: any;
  style: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}