import { forwardRef } from "react";
import { InputProps } from "../../interface";
import { InputStyled } from "./style";
export const Input = forwardRef<HTMLInputElement, InputProps>(({label, type, placeholder, errors, ...rest}, ref) => {

        return (
       
            <InputStyled>
    
                <label htmlFor="">{label}</label>
                <input type={type} placeholder={placeholder} {...rest} ref={ref}/>
                <small>{errors}</small>
    
            </InputStyled>
    
        );
});