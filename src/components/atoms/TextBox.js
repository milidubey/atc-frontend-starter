import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const TextBox = props => {
    return (
        <div>
            <Input type="number" name="noDays" id="noDays" style={{width: `${props.width}`}}/>
         </div>
    )
}



export default TextBox
