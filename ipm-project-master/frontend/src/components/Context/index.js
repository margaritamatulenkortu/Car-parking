import React, { Component } from "react";
import { getBookingsByRoom } from "../Actions/RoomActions";
import { toast } from 'react-toastify';
const ReservationContext = React.createContext();

export class Provider extends Component {

  
  state = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
    currentUserId: Number.parseInt(localStorage.getItem("currentUserId")),
    roomId: 0,
    users: [
      {
        id: 1,
        fname: "Bekhzod",
        lname: "Akhrorov",
        email: "bekhzod.akhrorov@cognizant.com",
        password: "password",
        img:
          "https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png",
        isAdmin: false,
      },
      {
        id: 2,
        fname: "Everita",
        lname: "Samuša",
        email: "everita.samusa@cognizant.com",
        password: "password",
        img:
          "https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png",
        isAdmin: false,
      },
      {
        id: 3,
        fname: "Peteris",
        lname: "Zevalds",
        email: "peteris.zevalds@cognizant.com",
        password: "password",
        img:
          "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
        isAdmin: false,
      },
    ],
    bookingsByRoom: [],
  };

  bookingsByRoom = (roomId) => {
    this.setState({
      roomId: roomId
    })
    getBookingsByRoom (roomId, (data) => {
      this.setState({
        bookingsByRoom: data, 
      });
    })
  };

 

  render() {
    return (
      <ReservationContext.Provider
        value={{
          users: this.state.users,
          roomId: this.state.roomId,
          isLoggedIn: this.state.isLoggedIn,
          currentUserId: this.state.currentUserId,
          bookingsByRoom: this.state.bookingsByRoom,
          actions: {
            bookingsByRoom: this.bookingsByRoom,
            onActionBegin: this.onActionBegin
          },
        }}
      >
        {this.props.children}
      </ReservationContext.Provider>
    );
  }
}
export const Consumer = ReservationContext.Consumer;
