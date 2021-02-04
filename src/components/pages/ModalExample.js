import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextBox from "../atoms/TextBox.js";
import DropDown from "../atoms/DropDown.js";
import { Container, Row, Col } from 'reactstrap';
import plusIcon from "../../assets/images/plus.svg";
import InfoBox from "../molecules/InfoBox.js";
import HelpButton from "../atoms/HelpButton.js";

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const daysOptions = [
    {id:1, text:1},
    {id:2,text:2},
    {id:3,text:3},
  ];

  const beforeTravelOptions = [
    {id:1, text:'Before travel'},
    {id:2,text:'On day of travel'},
    {id:3,text:'During Travel'},
  ];

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader >Add Booking and Ticketing Details for your 'Product Title' activity </ModalHeader>
        <ModalBody>
          <div>
              <p className="color-primary-text"><img src={plusIcon} /> I will import booking and ticketing information from my other actvity </p>

              <p className="subheading-text" >How would you like to set your cut-off time?</p>
              <p>This is the time when you stop booking and the product stops displaying on your customers calendar and search.</p>
              <p className="subheading-text" >Set your cutoff time</p>
              <Row>
                <Col xl="2" sm="12" className="mt-4">
                    <TextBox width="80%"/>
                </Col>
                <Col xl="3" sm="12" className="mt-4">
                    <DropDown header="Days"  dropdownOptions={daysOptions} />
                </Col>
                <Col xl="5" sm="12" className="mt-4" >
                    <DropDown header="Before travel" dropdownOptions={beforeTravelOptions} />
                </Col>
                <Col xl="2" sm="12" >
                </Col>
              </Row>
              <Row className="mt-5" >
                <Col>
                  <InfoBox text="All bookings will be confirmed automatically, however you have 24 hours to manually reject confirmed bookings. This saves you time and gives your customer a better experience. Plus, your product gets ore exposure because we can distribute it on all customers calendars" text2="Notification for each booking will appear on your dashboard and you can choose whether you want to receive email notifications each time booking is made"/>
                </Col>
              </Row>
          </div>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <Button color="primary">Update Calendar & Continue</Button>
              <Button className="ml-4"  onClick={toggle}>Cancel</Button>
            </div>
          </div>
          <HelpButton/>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;