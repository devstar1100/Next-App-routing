import { MouseEventHandler } from "react";

export interface TableRow {
  id: number;
  page: string;
  scan: string;
  avvertenze: number;
}

export interface ButtonType {
  disabled?: boolean;
  icon?: any;
  style: string;
  title?: string;
  titleHiddenable?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>;
}