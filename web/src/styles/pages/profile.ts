import styled from 'styled-components';

export const ProfileInfo = styled.div`
    display: flex;
    width: 100%;
    margin: 5px 0px;

    & > img {
        background-color: #333;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        object-fit: cover;
        cursor: pointer;
        object-position: 50% 50%;
        transition: opacity .3s ease-in;
    }

    & > img:hover {
        opacity: 0.7;
    }

    & > div {
        display: flex;
        align-items: center;
        margin-left: 60px;
        padding: 20px;
        width: 100%;
    }

`;

export const Info = styled.div`

    & > .info-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

`;

export const LogoutSection = styled.section`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .4s opacity;
    margin-top: 20px;

    &:hover {
        opacity: 0.5;
    }

`;
