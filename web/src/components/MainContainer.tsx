import React from 'react';
import { Container } from '../styles/components/main_container';


const MainContainer: React.FC = ( { children } ) => {

    return (
        <Container>
            {children}
        </Container>
    );

};

export default MainContainer;