import React from 'react';

import { Input } from '../styles/components/form_input';

const FormInput = ({ ...rest })=>{

    return(
        <Input {...rest} />
    );

};

export default FormInput;  