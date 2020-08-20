import API from "../helpers/API";
import { 
  GET_ALL_ROOMS, 
  GET_ALL_BOOKINGS,
  GET_ALL_USERS, 
  GET_BOOKINGS_BY_ROOM } from "../constants/constants";

  import { toast } from 'react-toastify';


function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return [...map.entries()].sort();
}

export const getAllRoomsList = async (cb) => {
  return API.get(GET_ALL_ROOMS)
    .then((res) => {
      let rooms = res.data;
      if(rooms.length > 0){
        let group = groupBy(rooms, rooms => rooms.floor);
        cb(group);
      }else{
        console.info('RoomList Empty');
        toast.info('RoomList Empty')
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getAllBookingList = async (cb) => {
  return API.get(GET_ALL_BOOKINGS)
    .then((res) => {
      cb(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getBookingsByRoom = async (roomId, cb) => {
  return API.get(`${GET_BOOKINGS_BY_ROOM}/${roomId}`)
    .then((res) => {
      console.clear();
      
        if (res.data.length === 0) toast.info('There is no booking for this room');
        let rooms = [];
        let index = 0;
        res.data.map(({title, endDate, startDate, id}) => {
          rooms[index] = {
            id: id,
			      StartTime: startDate,
		      	EndTime: endDate,
			      Subject: title
          }
          index += 1;
        })
        console.log(rooms)
        cb(rooms)
     })
    .catch((err) => {
      console.error(err);
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

export const insertRecords = (record) => {
  return API.post(GET_ALL_BOOKINGS, record)
    .then((res) => {
      console.info('Record Created')
    })
    .catch((err) => {
      console.log(err);
    });
};
