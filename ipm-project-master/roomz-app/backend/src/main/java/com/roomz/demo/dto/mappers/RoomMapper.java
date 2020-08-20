package com.roomz.demo.dto.mappers;

import com.roomz.demo.dto.RoomDTO;
import com.roomz.demo.entity.Room;
import org.springframework.stereotype.Service;

@Service
public class RoomMapper {
    public Room DTOtoRoom(RoomDTO roomDTO) {
        Room room = new Room();
        room.setId(roomDTO.getId());
        room.setName(roomDTO.getName());
        room.setFloor(roomDTO.getFloor());
        room.setMaxCapacity(roomDTO.getMaxCapacity());
        room.setAvailable(roomDTO.isAvailable());
        return room;
    }

    public RoomDTO RoomToDTO(Room room) {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setId(room.getId());
        roomDTO.setName(room.getName());
        roomDTO.setFloor(room.getFloor());
        roomDTO.setMaxCapacity(room.getMaxCapacity());
        roomDTO.setAvailable(room.isAvailable());
        return roomDTO;
    }
}
