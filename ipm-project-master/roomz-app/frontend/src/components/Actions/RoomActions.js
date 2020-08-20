import API from "../helpers/API";
import { GET_ALL_ROOMS, GET_ALL_BOOKINGS,GET_ALL_USERS } from "../constants/constants";


export const getAllRoomsList = async (setRoomsList) => {
  return API.get(GET_ALL_ROOMS)
    .then((res) => {
      console.log(res)
      setRoomsList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllBookingList = async (setBookingList) => {
  return API.get(GET_ALL_BOOKINGS)
    .then((res) => {
      console.log(res.data)
      setBookingList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllUsersList = (setAllUsers) => {
  return API.get(GET_ALL_USERS)
    .then((res) => {
      setAllUsers(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
