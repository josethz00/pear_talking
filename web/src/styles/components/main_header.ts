import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 25px;
    padding: 10px;
    height: 80px;
    background-color: #2c3159;

    & .logo {
        margin-left: 15px;
        width: 60px;
    }
`;

export const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 20px 0px 0px;
    & .links{
        text-decoration: none;
        font-size: 0.9rem;
        margin: 0px 23px;
        transition: .4s color linear;
    }

    & #link-to-profile {
        text-decoration: none;
        font-weight: 600;
        color: #aaa;
        transition: .5s;
    }
    & #link-to-profile:hover {
        color: #e5e5e5;
    }

    & img {
        background-color: #333;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        object-fit: cover;
        cursor: pointer;
        margin-left: 30px;
        object-position: 50% 50%;
        transition: opacity .3s ease-in;
    }
    & > img:hover {
        opacity: 0.7;
    }
`;

export const LinkSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;

    & .icons-wrapper {
        color: #aaa;
        cursor: pointer;
        width: 40px;
        transition: linear;
    }

    & .icons-wrapper:hover {
        color: #e5e5e5;
        border-bottom: 3px solid #fafa49;
    }

`;