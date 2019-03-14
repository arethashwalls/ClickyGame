import React from 'react';
import {Row} from 'react-materialize';
import './style.css';

function ImageBox(props) {
    return <Row className={props.classes} >
        {props.children}
    </Row>
}
 
export default ImageBox;
