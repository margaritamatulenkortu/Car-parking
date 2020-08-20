import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { getAllRoomsList } from "../Actions/RoomActions";
import Rooms from './Rooms'
const RoomList = () => {
  const [rooms, setRoomsList] = useState([]);
  useEffect(() => {
    getAllRoomsList((rooms) => {
      setRoomsList(rooms)
    });
    return () => "";
  }, []);


  return (
  (typeof rooms !== 'undefined' && rooms.length > 0) && (
    <Accordion>
      { rooms.map((floor) => (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={floor[0]}>
              {`Floor Number ${floor[0]}`}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={floor[0]}>
            <Rooms rooms={floor[1]}/>
          </Accordion.Collapse>
        </Card>
      ))}
     
    </Accordion>
  ))
};

export default RoomList;


// Maximum Capacity of the reoom is for {maxCapacity} people. <br />
// It is {available ? "available" : "not Available"} to book.