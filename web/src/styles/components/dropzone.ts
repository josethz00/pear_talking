import styled from 'styled-components';

export const DropzoneSection = styled.div`
    height: 65px;
    background: #202441;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    outline: 0;
    width: 65px;
    cursor: pointer;
    border-radius: 50%;

    & img {
        width: 65px;
        height: 65px; 
        object-fit: cover;
        border-radius: 50%;
    }

    & svg {
        color: #ffff00;
        width: 20px;
        height: 20px;
        margin-bottom: 8px;
    }

`;
