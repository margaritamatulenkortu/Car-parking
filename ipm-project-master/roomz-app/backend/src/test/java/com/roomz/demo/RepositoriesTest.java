package com.roomz.demo;

import com.roomz.demo.entity.Booking;
import com.roomz.demo.entity.Room;
import com.roomz.demo.entity.User;
import com.roomz.demo.repository.BookingRepository;
import com.roomz.demo.repository.RoomRepository;
import com.roomz.demo.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
class RepositoriesTest {
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private TestEntityManager entityManager;

    @Test
    void shouldCreateRoomTest() {
        Room room = new Room();
        room.setId(77);
        room.setName("room");
        room.setAvailable(false);
        room.setMaxCapacity(10);
        room.setFloor(2);
        room = entityManager.merge(room);
        assertThat(roomRepository.findById(room.getId()).get().equals(room));

    }

    @Test
    void shouldCreateUserTest() {
        User user = new User();

        user.setId(77);
        user.setName("user");
        user.setSurname("users");
        user.setEmail("user@");
        user.setPassword("userpass");
        user.setImage("userim");
        user.setPosition("userpos");
        user.setActive(false);
        user.setUserIsAdmin(false);

        user = entityManager.merge(user);
        assertThat(userRepository.findById(user.getId()).get().equals(user));

    }

    @Test
    void shouldCreateBookingTest() {
        User user = new User();

        user.setId(77);
        user.setName("user");
        user.setSurname("users");
        user.setEmail("user@");
        user.setPassword("userpass");
        user.setImage("userim");
        user.setPosition("userpos");
        user.setActive(false);
        user.setUserIsAdmin(false);
        user = entityManager.merge(user);

        Room room = new Room();

        room.setId(77);
        room.setName("room");
        room.setAvailable(false);
        room.setMaxCapacity(10);
        room.setFloor(2);
        room = entityManager.merge(room);

        Booking booking = new Booking();

        booking.setId(5);
        booking.setTitle("booking");
        booking.setComments("booking object");
        booking.setStartDate(LocalDateTime.of(2020, 8, 21, 12, 30));
        booking.setEndDate(LocalDateTime.of(2020, 8, 21, 14, 30));
        booking.setRoom(room);
        booking.setUser(user);

        booking = entityManager.merge(booking);
        Booking bookingSaved = bookingRepository.findById(booking.getId()).get();
        assertThat(bookingSaved.equals(booking));
    }


}
