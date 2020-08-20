package com.roomz.demo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RoomZProjectApplication {

    private static final Logger logger = LogManager.getLogger(RoomZProjectApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(RoomZProjectApplication.class, args);

        logger.trace("TRACE logger working!");
        logger.debug("DEBUG logger working!");
        logger.info("INFO logger working!");
        logger.warn("WARN logger working!");
        logger.error("ERROR logger working!");
        logger.fatal("FATAL logger working!");

    }

}
