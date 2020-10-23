import styled from 'styled-components';

export const Divider = styled.div`
    margin-top: 35px;
    width: 100%;
    height: 3px;
    background-color: #aaa;
`;

export const HeadingContainer = styled.div `
    width: 1000px;
`;

export const SearchAndAddContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const SearchInputWrapper = styled.div`
    margin: 40px 0px;
    display: flex;
    width: 600px;

    & > input {
        width: 80%;
        padding: 15px;
        background-color: #202441;
        color: #aaa;
        border-radius: 8px 0px 0px 8px;
    }

    & > button {
        width: 20%;
        font-weight: 700;
        background-color: #EADA49;
        border-radius: 0px 8px 8px 0px; 
        cursor: pointer;
        transition: background .3s;
    }

    & > button:hover {
        background-color: #fAfA39;
    }

`;

export const AddCircle = styled.div`
    display: flex;
    align-items: center;
    color: #aaa;
    margin-right: 5px;
    cursor: pointer;
    transition: .3s color;

    & > span {
        margin-right: 20px;
    }

    &:hover, #add-icon:hover {
        color: #fff;
    }
`;

export const FeedSection = styled.div`
    margin: 30px 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 27px;
`;

export const Post = styled.div`
    height: 300px;
    background-color: #202441;
    border-radius: 8px;
    padding: 8px;
    display: flex;  
    flex-direction: column;
    cursor: pointer;
    transition: background-color .5s ease-in-out;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.6);

    & p {
        width: 100%;
        padding: 20px;   
    }

    &:hover {
        background-color: #292449;
    }

`;

export const PostHeader = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    margin: 5px 10px;

    & > img {
        background-color: #333;
        width: 60px;
        border-radius: 50%;
        height: 60px;
        object-fit: contain;
        margin-right: 15px;
    }
`;

export const PostFooter = styled.div`
    padding: 0px 20px;
    font-size: 10px;
`;