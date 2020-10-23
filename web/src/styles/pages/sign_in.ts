import styled from 'styled-components';


export const LogoSection = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    max-width: 450px;
`; 

export const CredentialsSection = styled.div`
    display: flex;
    height: 80%;
    background-color: #06172f;
    border-radius: 8px;
    flex-direction: column;
    align-items: stretch;
    padding: 70px;

    & > h3 {
        margin-left: 5px;
        margin-top: 2px;
        cursor: pointer;
        color: #eafa49;
        font-weight: 600;
        transition: .7s;
    }
    & > h3:hover {
        color: #ffff00;
    }

    & > button {
        margin-top: 35px;
        height: 57px;
        border: 0px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 800;
        background-color: #fafa49;
        transition: .4s;
    }

    & > button:hover {
        background-color: #ffff22;
    }

`;

export const RegisterButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    & > span {
        font-weight: 300;
        font-size: 16px;
        margin-right: 8px;
    }

    & > h3 {
        color: #eafa49;
        cursor: pointer;
        font-weight: 600;
        transition: .7s;
    }
    & > h3:hover {
        color: #ffff00;
    }

`;