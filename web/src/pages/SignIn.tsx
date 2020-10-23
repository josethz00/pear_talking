import React from 'react';
import FormInput from '../components/FormInput';
import { Heading } from '../styles/components/heading_title';
import { CredentialsSection, LogoSection, RegisterButtonWrapper } from '../styles/pages/sign_in';
import AuthContainer from '../components/AuthContainer';
import { useHistory } from 'react-router-dom';


const SignIn: React.FC = () => {

  const history = useHistory();

  return (
    <AuthContainer>
        <LogoSection>
            <img alt='Logo' style={{ width: 290 }} src={require('../assets/images/logo.png')} />
            <Heading size={40} color='#fff' marginTop={50} weight={700} >
              Seja bem-vindo ao Pear, faça já o seu login na plataforma
            </Heading>
        </LogoSection>
        <CredentialsSection>
          <FormInput placeholder="E-mail" type="email" />
          <FormInput placeholder="Senha" type="password" />
          <h3>Esqueci a minha senha</h3>
          <button type="submit">
            Entrar
          </button>
          <RegisterButtonWrapper>
            <span>Nao tem uma conta?  </span>
            <h3 onClick={ () => history.push('sign-up') }>Registre-se</h3>
          </RegisterButtonWrapper>
        </CredentialsSection>
    </AuthContainer>
  );
  
};

export default SignIn;