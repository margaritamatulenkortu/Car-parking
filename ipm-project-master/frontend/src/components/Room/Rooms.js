import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { getBookingsByRoom } from "../Actions/RoomActions";
import { Consumer } from "../Context";

const Rooms = ({ rooms }) => {
  return (
    <Consumer>
      {({actions}) => {
        const handleClick = (e) => {
          console.clear("Get Room ID");
          let roomId = e.currentTarget.id;
          actions.bookingsByRoom(roomId);
        };

        return (
          <>
            {rooms.map(({ name, id, maxCapacity }) => {
              return (
                <OverlayTrigger
                  key={id}
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-bottom`}>
                      Capacity - <strong>{maxCapacity} people</strong>.
                    </Tooltip>
                  }
                >
                  <a
                    id={id}
                    className="d-block btn bg-white text-primary"
                    onClick={handleClick}
                  >
                    {name}
                  </a>
                </OverlayTrigger>
              );
            })}
          </>
        );
      }}
    </Consumer>
  );
};

export default Rooms;
