import styled from "styled-components";

const buttonVariants = {
  default: { backgroundColor: "var(--primary-color)", color: "var(--grey-0)" },
  default_hover: { backgroundColor: "var(--primary-color-focus)", color: "var(--grey-0)" },
  negative: { backgroundColor: "var(--primary-color-negative)", color: "var(--grey-0)" },
  disable: { backgroundColor: "var(--grey-1)", color: "var(--grey-0)" },
  disable_hover: { backgroundColor: "var(--grey-2)", color: "var(--grey-0)" },
  text_button: { backgroundColor: "var(--grey-3)", color: "var(--grey-0)" },
  text_button_hover: { backgroundColor: "var(--grey-2)", color: "var(--grey-0)" }
};

const buttonSizes = {
  lesser:{ width: "25px", height: "25px" },
  small: { width: "119px", height: "38px" },
  medium: { width: "133px", height: "43px" },
  large: { width: "146px", height: "48px" },
};
interface ButtonProps {
  variant: keyof typeof buttonVariants;
  variant_hover: keyof typeof buttonVariants;
  size: keyof typeof buttonSizes;

}

export const Button = styled.button<ButtonProps>`
  ${({ variant, variant_hover, size }) => `
    background-color:${buttonVariants[variant].backgroundColor};
    color:${buttonVariants[variant].color};
    width: ${buttonSizes[size].width};
    height: ${buttonSizes[size].height}; 
    &:hover{
        background-color:${buttonVariants[variant_hover].backgroundColor};
    }
    ${
      size === "large"
        ? `font:var(--button-big-text);`
        : `font:var(--button-medium-text);`
    }

    

  `}
  border: none;
  border-radius: 4px;

  
`;
