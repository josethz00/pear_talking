import React from 'react';
import { Heading } from '../styles/components/heading_title';


export interface HeadingProps{
    size: number;
    color: string;
    marginTop?: number;
    weight: number;
    alignSelf?: string;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}

const HeadingTitle: React.FC<HeadingProps> = ( { size, color, marginTop, weight, alignSelf, marginBottom, marginLeft, marginRight, children } ) => {

    return (
        <Heading size={size} color={color} weight={weight} marginTop={marginTop} alignSelf={alignSelf} marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight} >
            {children}
        </Heading>
    );

};

export default HeadingTitle;