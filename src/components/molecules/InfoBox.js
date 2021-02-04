import React from 'react'
import alertIcon from "../../assets/images/alert.svg";

const InfoBox = props => {
    return (
        <div className="d-flex justify-content-start">
            <div className="warningContainer" >
                <img src={alertIcon}/>
            </div>
            <div className="warningTextContainer p-2" >
                <p>{props.text}</p>
                <p>{props.text2}</p>
            </div>
        </div>
    )
}



export default InfoBox