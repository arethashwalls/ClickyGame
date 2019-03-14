import React from 'react';
import {Col} from 'react-materialize';
import './style.css';

function Image(props) {
    const {imgAlt, imgSrc} = props.lang;
    return <Col l={3} m={4} s={6} className='lang-col grey darken-3' >
        <img src={'%PUBLIC_URL%' + imgSrc} alt={imgAlt} className='lang-image responsive-img z-depth-3' onClick={() => props.clickLang(props.lang)}/>
    </Col>
}

export default Image;