import React, { useEffect, useState } from "react";
import { Media, Container, Card } from "react-bootstrap";
import { getAllBookingList } from "../Actions/RoomActions";
import {toast} from 'react-toastify'
import Avatar from "../Layout/Avatar";

const BookingList = () => {
  
  const [booking, setAllBookingList] = useState([]);
  useEffect(() => {
    getAllBookingList((data) => {
      setAllBookingList(data)
    });
    return () => "";
  }, []);

  return (
    <Container>
      {booking.map(
        ({ id, bookingTitle, title, startDate, endDate, user }) => (
          <Card className="p-2 my-2 d-flex flex-row" key={id}>
            <Avatar user_id={user} size={64} />
            <Media.Body>
              <h5>{bookingTitle}</h5>
              <p>
                {title}
                <br />
                <em className="text-info">
                  From {new Date(startDate).toDateString()} till
                  {new Date(endDate).toDateString()}
                </em>
              </p>
            </Media.Body>
          </Card>
        )
      )}
    </Container>
  );
};

export default BookingList;
