import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  errors?: string;
}
