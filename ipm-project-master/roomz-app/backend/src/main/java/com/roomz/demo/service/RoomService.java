package com.roomz.demo.service;

import com.roomz.demo.dto.RoomDTO;
import com.roomz.demo.dto.mappers.RoomMapper;
import com.roomz.demo.entity.Room;
import com.roomz.demo.exception.GeneralApiException;
import com.roomz.demo.exception.ResourceNotFoundException;
import com.roomz.demo.repository.RoomRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class RoomService {

    private RoomRepository roomRepository;
    private RoomMapper roomMapper;

    final static Logger logger = LogManager.getLogger(RoomService.class.getName());

    @Autowired
    public RoomService(RoomMapper roomMapper, RoomRepository roomRepository) {
        this.roomMapper = roomMapper;
        this.roomRepository = roomRepository;
    }


    public RoomDTO createRoom(RoomDTO roomDTO) {
        Room room = roomMapper.DTOtoRoom(roomDTO);
        if (roomRepository.findById(room.getId()).isPresent()) {
            throw new GeneralApiException("A room already exists with ID: " + room.getId());
        } else {
            Room roomCreated = roomRepository.save(room);
            return roomMapper.RoomToDTO(roomCreated);
        }
    }

    public void deleteRoom(@NonNull int id) {
        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()) {
            roomRepository.delete(room.get());
        } else {
            throw new ResourceNotFoundException("No such room with id: " + id);
        }
    }

    public Set<RoomDTO> getAllRooms() {
        return roomRepository.findAll()
                .stream()
                .map(roomMapper::RoomToDTO)
                .collect(Collectors.toSet());
    }

    public RoomDTO findRoomById(int id) {
        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()) {
            return roomMapper.RoomToDTO(room.get());
        } else {
            throw new ResourceNotFoundException("No such room found with id :" + id);
        }
    }

    public Set<RoomDTO> findRoomByName(String name) {
        return roomRepository.findAll()
                .stream()
                .map(roomMapper::RoomToDTO)
                .filter(r -> r.getName().toLowerCase().equals(name.toLowerCase()))
                .collect(Collectors.toSet());
    }


    public Set<RoomDTO> findRoomsByFloor(int nr) {
        return roomRepository.findAll()
                .stream()
                .map(roomMapper::RoomToDTO)
                .filter(r -> r.getFloor() == nr)
                .collect(Collectors.toSet());
    }

    public Set<RoomDTO> getAllAvailableRooms() {
        return roomRepository.findAll()
                .stream()
                .map(roomMapper::RoomToDTO)
                .filter(RoomDTO::isAvailable)
                .collect(Collectors.toSet());
    }

    public RoomDTO updateRoom(int id, boolean status) {
        Optional<Room> roomOptional = roomRepository.findById(id);
        if (roomOptional.isPresent()){
            Room roomToUpdate = roomOptional.get();
            roomToUpdate.setAvailable(status);
            roomRepository.save(roomToUpdate);
            RoomDTO roomUpdated = roomMapper.RoomToDTO(roomOptional.get());
            return roomUpdated;
        }
        else{
            throw new ResourceNotFoundException("No such room with id: " + id);
        }

    }
}

