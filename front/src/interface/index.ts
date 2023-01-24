import { InputHTMLAttributes } from "react";
import { SnackbarOrigin } from "@mui/material";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  errors?: string;
  value?: string |number;
}

export interface UserTechsProps {
  id: string;
  name: string;
  status: string;
}

export interface ModalHandlerProps {
  typeOfForm?: string;
  techData?:{
    id: string;
    name: string;
    status: string;
  }
}

export interface ModalTechsProps {
  open: boolean;
  handleModal: ({typeOfForm, techData}:ModalHandlerProps) => void;
  type: string;
  techData?: {
    id: string;
    name: string;
    status: string;
  }
}

export interface TechHeaderModal {
  handleModal: ({typeOfForm, techData}:ModalHandlerProps) => void;
}

export interface State extends SnackbarOrigin {
  isOpenAlert: boolean;
}


