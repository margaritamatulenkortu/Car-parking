package com.roomz.demo.service;

import com.roomz.demo.dto.BookingDTO;
import com.roomz.demo.dto.mappers.BookingMapper;
import com.roomz.demo.entity.Booking;
import com.roomz.demo.exception.GeneralApiException;
import com.roomz.demo.exception.ResourceNotFoundException;
import com.roomz.demo.repository.BookingRepository;
import com.roomz.demo.repository.RoomRepository;
import com.roomz.demo.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BookingService {

    private final static Logger LOGGER = LoggerFactory.getLogger(BookingService.class);

    private BookingMapper bookingMapper;
    private BookingRepository bookingRepository;
    private UserRepository userRepository;
    private RoomRepository roomRepository;

    @Autowired
    public BookingService(BookingMapper bookingMapper, BookingRepository bookingRepository, UserRepository userRepository, RoomRepository roomRepository) {
        this.bookingMapper = bookingMapper;
        this.bookingRepository = bookingRepository;
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
    }


    public Set<BookingDTO> getAllBookings() {
        LOGGER.info("All bookings = {}", bookingRepository.findAll());
        return bookingRepository.findAll()
                .stream()
                .map(r -> bookingMapper.BookingToDTO(r))
                .collect(Collectors.toSet());
    }

    public BookingDTO createNewBooking(BookingDTO bookingDTO) {
        Booking booking = bookingMapper.DTOToBooking(bookingDTO);
        if (bookingRepository.findById(booking.getId()).isPresent()) {
            throw new GeneralApiException("A booking already exists with ID: " + booking.getId());
        } else if (!userRepository.findById(booking.getUser().getId()).isPresent()) {
            throw new ResourceNotFoundException("No such user found with ID: " + booking.getUser().getId());
        } else if (!roomRepository.findById(booking.getRoom().getId()).isPresent()) {
            throw new ResourceNotFoundException("No such room found with ID: " + booking.getRoom().getId());
        } else {
            Booking created = bookingRepository.save(booking);
            return bookingMapper.BookingToDTO(created);
        }
    }

    public void deleteBooking(int bookingId) {
        Optional<Booking> booking = bookingRepository.findById(bookingId);
        if (booking.isPresent()) {
            bookingRepository.delete(booking.get());
        } else {
            throw new ResourceNotFoundException("No such booking with id: " + bookingId);
        }
    }

    public Set<BookingDTO> getBookingsByRoomId(int roomId) {
        if (roomRepository.findById(roomId).isPresent()) {
            return bookingRepository.findAll()
                    .stream()
                    .filter(b -> b.getRoom().getId()==roomId)
                    .map(r -> bookingMapper.BookingToDTO(r))
                    .collect(Collectors.toSet());
        }
        else{
            throw new ResourceNotFoundException("No such room found with id: " + roomId);
        }
    }
}
