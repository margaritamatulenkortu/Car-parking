package com.roomz.demo;

import com.roomz.demo.dto.BookingDTO;
import com.roomz.demo.dto.RoomDTO;
import com.roomz.demo.dto.UserDTO;
import com.roomz.demo.dto.mappers.BookingMapper;
import com.roomz.demo.dto.mappers.RoomMapper;
import com.roomz.demo.dto.mappers.UserMapper;
import com.roomz.demo.entity.Booking;
import com.roomz.demo.entity.Room;
import com.roomz.demo.entity.User;
import com.roomz.demo.repository.RoomRepository;
import com.roomz.demo.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDateTime;


@SpringBootTest
class MapperTest {
    @Autowired
    private RoomMapper roomMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private BookingMapper bookingMapper;
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private UserRepository userRepository;

    @Test
    void shouldMapRoomToDTO() {
        Room room = new Room();

        room.setId(1);
        room.setName("room");
        room.setAvailable(false);
        room.setMaxCapacity(10);
        room.setFloor(2);

        RoomDTO roomDTO = new RoomDTO();

        roomDTO.setId(2);
        roomDTO.setName("roomdto");
        roomDTO.setAvailable(true);
        roomDTO.setMaxCapacity(7);
        roomDTO.setFloor(3);

        roomDTO = roomMapper.RoomToDTO(room);

        assertEquals(roomDTO.getId(), room.getId());
        assertEquals(roomDTO.getName(), room.getName());
        assertEquals(roomDTO.getMaxCapacity(), room.getMaxCapacity());
        assertEquals(roomDTO.getFloor(), room.getFloor());
        assertEquals(roomDTO.isAvailable(), room.isAvailable());
    }

    @Test
    void shouldMapDTOToRoom() {
        Room room = new Room();

        room.setId(1);
        room.setName("room");
        room.setAvailable(false);
        room.setMaxCapacity(10);
        room.setFloor(2);

        RoomDTO roomDTO = new RoomDTO();

        roomDTO.setId(2);
        roomDTO.setName("roomdto");
        roomDTO.setAvailable(true);
        roomDTO.setMaxCapacity(7);
        roomDTO.setFloor(3);

        room = roomMapper.DTOtoRoom(roomDTO);

        assertEquals(room.getId(), roomDTO.getId());
        assertEquals(room.getName(), roomDTO.getName());
        assertEquals(room.getMaxCapacity(), roomDTO.getMaxCapacity());
        assertEquals(room.getFloor(), roomDTO.getFloor());
        assertEquals(room.isAvailable(), roomDTO.isAvailable());
    }

    @Test
    void shouldMapUserToDTO() {

        User user = new User();

        user.setId(1);
        user.setName("user");
        user.setSurname("users");
        user.setEmail("user@");
        user.setPassword("userpass");
        user.setImage("userim");
        user.setPosition("userpos");
        user.setActive(false);
        user.setUserIsAdmin(false);

        UserDTO userDTO = new UserDTO();

        userDTO.setId(2);
        userDTO.setName("userdto");
        userDTO.setSurname("usersdto");
        userDTO.setEmail("userdto@");
        userDTO.setPassword("userdtopass");
        userDTO.setImage("userdtoim");
        userDTO.setPosition("userdtopos");
        userDTO.setActive(true);
        userDTO.setAdmin(true);

        userDTO = userMapper.UserToDTO(user);
        assertEquals(user.getId(), userDTO.getId());
        assertEquals(user.getName(), userDTO.getName());
        assertEquals(user.getSurname(), userDTO.getSurname());
        assertEquals(user.getEmail(), userDTO.getEmail());
        assertEquals(user.getPassword(), userDTO.getPassword());
        assertEquals(user.getImage(), userDTO.getImage());
        assertEquals(user.getPosition(), userDTO.getPosition());
        assertEquals(user.isActive(), userDTO.isActive());
        assertEquals(user.isUserIsAdmin(), userDTO.isAdmin());


    }

    @Test
    void shouldMapDTOToUser() {
        User user = new User();

        user.setId(1);
        user.setName("user");
        user.setSurname("users");
        user.setEmail("user@");
        user.setPassword("userpass");
        user.setImage("userim");
        user.setPosition("userpos");
        user.setActive(false);
        user.setUserIsAdmin(false);

        UserDTO userDTO = new UserDTO();

        userDTO.setId(2);
        userDTO.setName("userdto");
        userDTO.setSurname("usersdto");
        userDTO.setEmail("userdto@");
        userDTO.setPassword("userdtopass");
        userDTO.setImage("userdtoim");
        userDTO.setPosition("userdtopos");
        userDTO.setActive(true);
        userDTO.setAdmin(true);

        user = userMapper.DTOToUser(userDTO);

        assertEquals(user.getId(), userDTO.getId());
        assertEquals(user.getName(), userDTO.getName());
        assertEquals(user.getSurname(), userDTO.getSurname());
        assertEquals(user.getEmail(), userDTO.getEmail());
        assertEquals(user.getPassword(), userDTO.getPassword());
        assertEquals(user.getImage(), userDTO.getImage());
        assertEquals(user.getPosition(), userDTO.getPosition());
        assertEquals(user.isActive(), userDTO.isActive());
        assertEquals(user.isUserIsAdmin(), userDTO.isAdmin());
    }

    @Test
    void shouldMapBookingToDTO() {
        Room room = new Room();
        room.setId(10);

        User user = new User();
        user.setId(7);

        Booking booking = new Booking();

        booking.setId(1);
        booking.setTitle("booking");
        booking.setComments("booking object");
        booking.setStartDate(LocalDateTime.of(2020, 8, 21, 12, 30));
        booking.setEndDate(LocalDateTime.of(2020, 8, 21, 14, 30));
        booking.setRoom(room);
        booking.setUser(user);

        BookingDTO bookingDTO = new BookingDTO();

        bookingDTO.setId(1);
        bookingDTO.setTitle("bookingdto");
        bookingDTO.setComments("booking dto object");
        bookingDTO.setStartDate(LocalDateTime.of(2020, 8, 22, 12, 30));
        bookingDTO.setEndDate(LocalDateTime.of(2020, 8, 22, 14, 30));
        bookingDTO.setRoomId(4);
        bookingDTO.setUserId(6);

        bookingDTO = bookingMapper.BookingToDTO(booking);

        assertEquals(booking.getId(), bookingDTO.getId());
        assertEquals(booking.getTitle(), bookingDTO.getTitle());
        assertEquals(booking.getComments(), bookingDTO.getComments());
        assertEquals(booking.getStartDate(), bookingDTO.getStartDate());
        assertEquals(booking.getEndDate(), bookingDTO.getEndDate());

        assertEquals(bookingDTO.getRoomId(), 10);
        assertEquals(bookingDTO.getUserId(), 7);
    }

    @Test
    void shouldMapDTOToBooking() {
        Room room = new Room();
        room.setId(56);
        room.setName("room");
        room.setAvailable(false);
        room.setMaxCapacity(10);
        room.setFloor(2);
        roomRepository.save(room);


        User user = new User();
        user.setId(10);
        user.setName("user");
        user.setSurname("users");
        user.setEmail("user@");
        user.setPassword("userpass");
        user.setImage("userim");
        user.setPosition("userpos");
        user.setActive(false);
        user.setUserIsAdmin(false);
        userRepository.save(user);

        BookingDTO bookingDTO = new BookingDTO();

        bookingDTO.setId(2);
        bookingDTO.setTitle("bookingdto");
        bookingDTO.setComments("booking dto object");
        bookingDTO.setStartDate(LocalDateTime.of(2020, 8, 22, 12, 30));
        bookingDTO.setEndDate(LocalDateTime.of(2020, 8, 22, 14, 30));
        bookingDTO.setRoomId(4);
        bookingDTO.setUserId(6);

        Booking booking = new Booking();

        booking.setId(1);
        booking.setTitle("booking");
        booking.setComments("booking object");
        booking.setStartDate(LocalDateTime.of(2020, 8, 21, 12, 30));
        booking.setEndDate(LocalDateTime.of(2020, 8, 21, 14, 30));
        booking.setRoom(room);
        booking.setUser(user);
        booking = bookingMapper.DTOToBooking(bookingDTO);

        assertEquals(booking.getId(), bookingDTO.getId());
        assertEquals(booking.getTitle(), bookingDTO.getTitle());
        assertEquals(booking.getComments(), bookingDTO.getComments());
        assertEquals(booking.getStartDate(), bookingDTO.getStartDate());
        assertEquals(booking.getEndDate(), bookingDTO.getEndDate());

        assertEquals(booking.getRoom().getId(), 4);
        assertEquals(booking.getUser().getId(), 6);
    }


}
