import React, { useEffect, useState } from "react";
import { Media, Container, Card } from "react-bootstrap";
import { getAllBookingList } from "../Actions/RoomActions";
import {toast} from 'react-toastify'
import Avatar from "../Layout/Avatar";
import axios from 'axios';

const BookingList = () => {
  const [booking, setAllBookingList] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('/api/booking-api/bookings');
        console.log(response);
        setAllBookingList(response)
      } catch (error) {
        console.error(error);
      }
    }

    getUser()
    return () => "";
  }, []);

  useEffect(() => {
    if (typeof booking !== 'undefined' && booking.length > 0) {
    console.log(booking)
    }
    return () => ''
  }, [booking])

  return (
    <Container>
      {/* {booking.map(
        ({ id, bookingTitle, comments, startDate, endDate, user }) => (
          <Card className="p-2 my-2 d-flex flex-row" key={id}>
            <Avatar user_id={user} size={64} />
            <Media.Body>
              <h5>{bookingTitle}</h5>
              <p>
                {comments}
                <br />
                <em className="text-info">
                  {" "}
                  From {new Date(startDate).toDateString()} till{" "}
                  {new Date(endDate).toDateString()}
                </em>
              </p>
            </Media.Body>
          </Card>
        )
      )} */}
    </Container>
  );
};

export default BookingList;
