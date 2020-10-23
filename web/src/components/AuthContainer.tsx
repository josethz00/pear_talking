import React from 'react';

import { Container } from '../styles/components/auth_container';

const AuthContainer: React.FC = ( { children } )=>{

    return(
        <Container>
            {children}
        </Container>
    );

};

export default AuthContainer;  