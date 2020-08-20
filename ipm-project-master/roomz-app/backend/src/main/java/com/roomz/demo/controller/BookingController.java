package com.roomz.demo.controller;

import com.roomz.demo.dto.BookingDTO;
import com.roomz.demo.service.BookingService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@Slf4j
@RequestMapping("roomz-api/booking-api")
public class BookingController {

    private final static Logger LOGGER = LoggerFactory.getLogger(BookingController.class);

    @Autowired
    private BookingService bookingService;

    @GetMapping("/bookings")
    public Set<BookingDTO> getAllBookings() {
        LOGGER.info("Trying to get all Bookings");
        return bookingService.getAllBookings();
    }

    @PostMapping("/bookings")
    public BookingDTO createNewBooking(@RequestBody BookingDTO bookingDTO) {
        return bookingService.createNewBooking(bookingDTO);
    }

    @DeleteMapping("/bookings/{id}")
    public void deleteBooking(@PathVariable int id) {
        bookingService.deleteBooking(id);
    }

    @GetMapping("/bookings/{id}")
    public Set<BookingDTO> getBookingsByRoomId(@PathVariable int id){
        return bookingService.getBookingsByRoomId(id);
    }
}