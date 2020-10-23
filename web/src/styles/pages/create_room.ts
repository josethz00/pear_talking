import styled from 'styled-components';


export const CreateRoomWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 40px;

    & button {
        margin-top: 35px;
        height: 57px;
        border: 0px;
        width: 100%;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 800;
        background-color: #fafa49;
        transition: .4s;
    }

    & button:hover {
        background-color: #ffff22;
    }
`;

export const RoomTitle = styled.input`
    background-color: transparent;
    border: 0px solid #aaa;
    border-bottom-width: 1px;
    padding: 10px;
    width: 100%;
    margin-left: 20px;
    color: #f5f5f5;
`;

export const RoomInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;

`;

export const RoomDescription = styled.textarea`
    background-color: transparent;
    border: 0px solid #aaa;
    border-bottom-width: 1px;
    padding: 10px;
    height: 100px;
    width: 100%;
    margin-top: 40px;
    resize: none;
    margin-left: 20px;
    color: #f5f5f5;

    &::-webkit-scrollbar {
        display: none;
    }

`;