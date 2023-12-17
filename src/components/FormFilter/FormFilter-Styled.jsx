import styled from "styled-components";

const Form = styled.form`
    width: 65vw;
    height: 55vh;
    margin: auto;
    margin-top: 6vh;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 1px #b3afaf;

    hr {
        margin: auto;
        width: 95%;
        color: #808080;
        opacity: 0.3;
    }

    @media (max-width: 768px) {
        height: 65vh;
    }

`

const TitleForm = styled.div`

    display: flex;

    img {
        padding: 2%;
    }

    h1 {
        margin-top: 4%;
        color: #808080;
        font-size: 24px;
    }
`

const Inputs = styled.div`

    h1 {
        margin-left: 3%;
        color: #808080;
    }

`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    label {
        font-size: 23px;
        color: #808080;
    }

    input[type=radio], input[type=checkbox]  {
        width: 20px;
        margin-top: 20px;
    }

`;

const Input = styled.input`
    margin-left: 3%;
    margin-right: 5px;
    
`;

const ValueText = styled.span`
    margin-top: -2vh;
    align-self: flex-end;
    color: #808080;
    font-size: 22px;
    margin-right: 3%;
`;

const InputShowOpen = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3%;
    color: #808080;

    div {
        width: 30vw;
    }

    label {
        margin: 2%;
        font-size: 1.2em;
    }

    @media (max-width: 768px) {
        font-size: 20px;
        margin: 4%;
        flex-direction: column; 
        align-items: center;
        text-align: center;

    div {
        width: 100%; 
        margin: 4%;
    }

    label {
        font-size: 30px;
    }

}`

const Button = styled.div`
    text-align: center;
    margin-top: 20px;
    
    text-align: center;
    margin-top: 20px;

    button {
        width: 20vw;
        height: 5vh;
        border-radius: 5px;
        background-color: transparent;
        border: 1px solid #808080;
        margin-bottom: 10px; 
    }

    button:first-child {
        background-color: #FFB612;
        border: none;
        margin-right: 10px;
    }

    @media (max-width: 768px) {
        button {
            width: calc(80% - 20px); 
            display: block;
            margin: 10px auto; 
        }

        button:not(:last-child) {
            margin-bottom: 30px;
            margin-right: 60px;
        }

        button:first-child {
        }
}`
export {TitleForm, Form, Inputs, FormGroup, Input, ValueText, InputShowOpen, Button};