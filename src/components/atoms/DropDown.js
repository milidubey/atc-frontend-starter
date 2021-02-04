import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import dropDownIcon from "../../assets/images/dropDown.svg";



const DropDown = props => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    var list = props.dropdownOptions.map(function(dropdownProps, i){
        return <li key={i}>{dropdownProps.text}</li>
    });

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}  >
        <DropdownToggle color="transparent" className="dropDown">
          {props.header}
          <img src={dropDownIcon} className="dropDown-caret"/>
        </DropdownToggle>
        <DropdownMenu className="w-100 dropDownMenu mt-0" >
          {list}
        </DropdownMenu>
      </Dropdown>
    )
}


export default DropDown

