import React from 'react'
import { Button} from 'reactstrap';
import helpIcon from "../../assets/images/helpIcon.svg";

const HelpButton = props => {
    return (
       
            <Button>
                <img src={helpIcon}/>
                Help
            </Button>
      
    )
}



export default HelpButton