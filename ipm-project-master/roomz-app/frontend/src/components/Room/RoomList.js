import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { getAllRoomsList } from "../Actions/RoomActions";

const RoomList = () => {
  const [rooms, setRoomsList] = useState([]);
  useEffect(() => {
    getAllRoomsList(setRoomsList);
    return () => "";
  }, []);

  useEffect(() => {
    if (typeof rooms !== 'undefined' && rooms.length > 0) {
      console.log(rooms)
    }  
    return () => ''
  }, [rooms]) 


  if(typeof rooms !== 'undefined' && rooms.length > 0) {
  return (
    <Accordion>
      {/* { rooms.map(({ id, name, floor, maxCapacity, available }) => (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={id}>
              {name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={id}>
            <Card.Body>
              Room is on Floor Number {floor}. <br />
              Maximum Capacity of the reoom is for {maxCapacity} people. <br />
              It is {available ? "available" : "not Available"} to book.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
      */}
    </Accordion>
  ); }else{
    return(
    'Rooms is not Exist')
  }
};

export default RoomList;
