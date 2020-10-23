import React from 'react';
import FormInput from '../components/FormInput';
import { Heading } from '../styles/components/heading_title';
import { CredentialsSection, LogoSection, BackButtonWrapper } from '../styles/pages/sign_up';
import { FiArrowLeft } from 'react-icons/fi';
import AuthContainer from '../components/AuthContainer';
import { useHistory } from 'react-router-dom';


const SignUp: React.FC = () => {

  const history = useHistory();

  return (
    <AuthContainer>
        <CredentialsSection>
          <Heading alignSelf="center" marginBottom={15} size={30} color='#fff' marginTop={0} weight={700}>
            Crie sua conta
          </Heading>
          <FormInput placeholder="E-mail" type="email" />
          <FormInput placeholder="Nome" type="text" />
          <FormInput placeholder="Senha" type="password" />
          <FormInput placeholder="Confirmação de Senha" type="password" />
          <button type="submit">
            Cadastrar
          </button>
        </CredentialsSection>
        <LogoSection>
            <img alt='Logo' style={{ width: 290 }} src={require('../assets/images/logo.png')} />
            <Heading size={30} color='#fff' marginTop={50} weight={700} >
              Cadastre-se na plataforma e participe de diversos debates e conversas rápidas
            </Heading>
            <BackButtonWrapper onClick={ () => history.push('/') }>
              <FiArrowLeft size={20} className="arrow-icon" />
              <span>Voltar para login  </span>
            </BackButtonWrapper>
        </LogoSection>
    </AuthContainer>
  );
  
};

export default SignUp;