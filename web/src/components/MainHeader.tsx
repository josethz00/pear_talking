import React from 'react';
import { AiOutlineHome, AiOutlinePlusCircle, AiOutlineUser } from 'react-icons/ai';
import { Header, ProfileSection, LinkSection } from '../styles/components/main_header';
import { Link } from 'react-router-dom';

const MainHeader: React.FC = ()=>{

    return(
        <Header>
            <Link to="/" >
                <img src={require('../assets/images/logo_min.png')} className="logo" alt="Logomarca" />
            </Link>
            <LinkSection>
                <Link to="/">
                    <div className="icons-wrapper">
                        <AiOutlineHome size={30} />
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="icons-wrapper">
                        <AiOutlineUser size={30} />
                    </div>
                </Link>
                <Link to="create-room">
                    <div className="icons-wrapper">
                        <AiOutlinePlusCircle size={30} />
                    </div>
                </Link>
            </LinkSection>
            <ProfileSection>
                <Link to="/profile" id="link-to-profile">José Thomaz</Link>
                <Link to="/profile" >    
                    <img src="https://avatars3.githubusercontent.com/u/50122248?s=460&u=e7c70333cc7b0816e2e6ac96eb17d4b346e8b21f&v=4" alt="profile" />
                </Link>
            </ProfileSection>
        </Header>
    );

};

export default MainHeader;