import styled from "styled-components";

export const SelectStyled = styled.div`

    display: flex;
    flex-direction: column;

    label {
        
        font: var(--input-label)
        font-size: 0.875rem;
        color: var(--grey-0);

    }

    select {
        
        width: 90%;
        height: 48px;
        padding: 8px 10px;
        
        border-radius: 4px;
        border: none;
        background-color: var(--grey-2);
        color: var(--grey-0);

    }

    select::focus {

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
