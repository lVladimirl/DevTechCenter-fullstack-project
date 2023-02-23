import styled from "styled-components";

export const InputStyled = styled.div`

    display: flex;
    flex-direction: column;

    label {
        
        font: var(--input-label)
        font-size: 0.875rem;
        margin: 8px 0px;
        color: var(--grey-0);

    }

    input {
        
        width: 486px;
        height: 48px;
        padding: 8px 10px;
        
        border-radius: 4px;
        border: none;
        background-color: var(--grey-2);
        color: var(--grey-0);

    }

    input::focus {

        border: 1.5px solid var(--grey-0);      
    
    }

    small {
        
        color: var(--negative);
        opacity: 87%;
    }

    .propsCar {

        display: flex;
        flex-wrap: wrap;

        margin-top: 24px;

        .inputBox {

            input {

                width: 163%;

            }

        }

    }

`;
