package com.roomz.demo.dto.mappers;

import com.roomz.demo.dto.BookingDTO;
import com.roomz.demo.entity.Booking;
import com.roomz.demo.repository.RoomRepository;
import com.roomz.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingMapper {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoomRepository roomRepository;

    public Booking DTOToBooking(BookingDTO bookingDTO) {
        Booking booking = new Booking();
        booking.setId(bookingDTO.getId());
        booking.setUser(userRepository.getOne(bookingDTO.getUserId()));
        booking.setRoom(roomRepository.getOne(bookingDTO.getRoomId()));
        booking.setStartDate(bookingDTO.getStartDate());
        booking.setEndDate(bookingDTO.getEndDate());
        booking.setComments(bookingDTO.getComments());
        booking.setTitle((bookingDTO.getTitle()));
        return booking;
    }

    public BookingDTO BookingToDTO(Booking booking) {
        BookingDTO bookingDTO = new BookingDTO();
        bookingDTO.setId(booking.getId());
        bookingDTO.setUserId(booking.getUser().getId());
        bookingDTO.setRoomId(booking.getRoom().getId());
        bookingDTO.setStartDate(booking.getStartDate());
        bookingDTO.setEndDate(booking.getEndDate());
        bookingDTO.setComments(booking.getComments());
        bookingDTO.setTitle(booking.getTitle());
        return bookingDTO;
    }


}
