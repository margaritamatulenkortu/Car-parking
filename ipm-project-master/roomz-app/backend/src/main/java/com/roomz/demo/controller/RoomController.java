package com.roomz.demo.controller;

import com.roomz.demo.dto.RoomDTO;
import com.roomz.demo.service.RoomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@Slf4j
@RequestMapping("roomz-api/room-api")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @GetMapping("/rooms")
    public Set<RoomDTO> getAllRooms() {
        return roomService.getAllRooms();
    }

    @GetMapping("/available-rooms")
    public Set<RoomDTO> getAllAvailableRooms() {
        return roomService.getAllAvailableRooms();
    }

    @DeleteMapping("/rooms/{id}")
    public void deleteRoom(@PathVariable int id) {
        roomService.deleteRoom(id);
    }

    @PostMapping("/rooms")
    public RoomDTO createRoom(@RequestBody RoomDTO roomDTO) {
        return roomService.createRoom(roomDTO);
    }

    @GetMapping("/rooms-id/{id}")
    public RoomDTO findRoomById(@PathVariable int id) {
        return roomService.findRoomById(id);
    }

    @GetMapping("/rooms-name/{name}")
    public Set<RoomDTO> findRoomByName(@PathVariable String name) {
        return roomService.findRoomByName(name);
    }

    @GetMapping("rooms-floor/{nr}")
    public Set<RoomDTO> findRoomsByFloor(@PathVariable int nr) {
        return roomService.findRoomsByFloor(nr);
    }

    @PatchMapping("rooms/{id}")
    public RoomDTO updateRoom(@PathVariable int id, boolean status){
        return roomService.updateRoom(id, status);
    }
}

