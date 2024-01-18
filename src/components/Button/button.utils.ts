import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ButtonProps {
  children?: string;
  icon?: StaticImport;
  onClick: () => void;
}
