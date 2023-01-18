
import { createGlobalStyle } from  "styled-components"


export const GlobalStyle = createGlobalStyle`
    *{
        //Font-Family import
        @import url('https://fonts.googleapis.com/css2?family=Inter&family=Lexend&display=swap');
    }
    :root {

        //primary-colors
        --primary-color: #FF577F;
        --primary-color-focus: #FF427F;
        --primary-color-negative: #59323F;

        //Grey Scale
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41; 
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        

        //FeedBack
        --negative: #E83F5B;
        --sucess: #3FE864;
 

        //Typography
        --heading-1-700: normal normal 700 16px '', sans-serif;
        --heading-2-600: normal normal 600 16px 'Lexend', sans-serif;
        --heading-3-600: normal normal 600 16px 'Lexend', sans-serif;
        --headline-1-400: normal normal 400 14px 'Lexend', sans-serif;
        --headline-2-700: normal normal 700 14px 'Lexend', sans-serif;
        --body-1-400: normal normal 400 12px 'Inter', sans-serif;
        --button-big-text: normal normal 600 16px 'Inter', sans-serif;
        --button-medium-text: normal normal 600 14px 'Inter', sans-serif;
        --tech-title-700: normal normal 700 14px 'Inter', sans-serif;
        --input-placeholder:normal normal 400 16px 'Inter', sans-serif;
        --input-label:normal normal 500 14px 'Inter', sans-serif;
    }

    * {

        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    
    body { 
        
        font-family: 'Lexend', sans-serif;
        background-color: var(--grey-4);
        display:flex;
        flex-flow: column;
        
    }   

`
