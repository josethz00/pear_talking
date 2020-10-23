import React from 'react';
import MainRoutes from './main.routes';
import AuthRoutes from './auth.routes';


const Routes: React.FC = ()=>{

    const signed = true;
    return signed ? <MainRoutes /> : <AuthRoutes />;
    
};

export default Routes;