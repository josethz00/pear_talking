import styled from 'styled-components';


export const LogoSection = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    max-width: 450px;
`; 

export const CredentialsSection = styled.div`
    display: flex;
    height: 100%;
    background-color: #06172f;
    border-radius: 8px;
    flex-direction: column;
    align-items: stretch;
    padding: 40px 60px;

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
        height: 62px;
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

export const BackButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;
    margin-top: 30px;
    color: #fafa49;

    &:hover {
        color: #ffff22;
    }

    & > span {
        font-weight: 600;
        font-size: 18px;
    }
    
    & > .arrow-icon {
        margin-right: 12px;
    }

`;