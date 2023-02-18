import { forwardRef } from "react";
import { SelectProps } from "../../interface";
import { SelectStyled } from "./style";
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, placeholder, type ,value, errors, ...rest }, ref) => {
    return (
      <>
      {type==="tech" ? 
      (
        <SelectStyled>
        <label htmlFor="">{label}</label>
        <select
          placeholder={placeholder}
          {...rest}
          ref={ref}
          value={value}
        >
          <option value="INICIANTE">Iniciante</option>
          <option value="INTERMEDIARIO">Intermediario</option>
          <option value="AVANCADO">Avançado</option>
        </select>
        <small>{errors}</small>
      </SelectStyled>
      ):(
        <SelectStyled>
        <label htmlFor="">{label}</label>
        <select
          placeholder={placeholder}
          {...rest}
          ref={ref}
          value={value}
        >
          <option value="JUNIOR">Junior</option>
          <option value="PLENO">Pleno</option>
          <option value="SENIOR">Senior</option>
        </select>
        <small>{errors}</small>
      </SelectStyled>
      )
      }
      </>
    );
  }
);
