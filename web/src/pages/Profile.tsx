import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import HeadingTitle from '../components/HeadingTitle';
import MainContainer from '../components/MainContainer';
import MainHeader from '../components/MainHeader';

import { ProfileInfo, Info, LogoutSection } from '../styles/pages/profile';


const Profile: React.FC = () => {

  return (
    <>
      <MainHeader />
      <MainContainer>
        <ProfileInfo>
          <img src="https://avatars3.githubusercontent.com/u/50122248?s=460&u=e7c70333cc7b0816e2e6ac96eb17d4b346e8b21f&v=4" alt="Foto de perfil" />
          <div>
            <Info>
              <div className="info-wrapper">
                <HeadingTitle size={18} color="#fff" weight={700} >
                  Nome:
                </HeadingTitle>
                <HeadingTitle size={16} marginLeft={10} color="#aaa" weight={100}>
                  José Thomaz
                </HeadingTitle>
              </div>
              <div className="info-wrapper">
                <HeadingTitle size={18} color="#fff" weight={700} >
                  E-mail:
                </HeadingTitle>
                <HeadingTitle size={16} marginLeft={10} color="#aaa" weight={100}>
                  jtsoares17@hotmail.com
                </HeadingTitle>
              </div>
              <div className="info-wrapper" style={{ marginBottom: 0 }} >
                <HeadingTitle size={18} color="#fff" weight={700} >
                  Membro desde:
                </HeadingTitle>
                <HeadingTitle size={16} marginLeft={10} color="#aaa" weight={100}>
                  16/10/2020
                </HeadingTitle>              
              </div>
            </Info>
          </div>
        </ProfileInfo>
        <LogoutSection>
            <HeadingTitle size={17} marginRight={10} color="#fff000" weight={600}>
                Sair da conta
            </HeadingTitle>
            <FiLogOut size={22} color="red" />
        </LogoutSection>
      </MainContainer>
    </>
  );
  
};

export default Profile;