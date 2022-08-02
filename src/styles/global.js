import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --primary: #FF577F;
        --primary-focus: #FF427F;
        --primary-negative: #59323F;
        --success: #3FE864;
        --failure: #E83F5B;
        --grey4: #121214;
        --grey3: #212529;
        --grey2: #343B41;
        --grey1: #868E96;
        --grey0: #F8F9FA;
    }

    body{
        background:  var(--grey4);
        color: var(--grey0);
    }

    body, input, button{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    h1,h2,h3{
        font-weight: 700;
        font-size: 1.5rem;
    }

    span{
        font-weight: 400;
    }

    button{
        font-weight: 500;
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    }


`;
