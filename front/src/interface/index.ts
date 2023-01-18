import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  errors?: string;
}

export interface UserTechsProps {
  id: string;
  name: string;
  status: string;
}
