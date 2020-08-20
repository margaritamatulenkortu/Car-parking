package com.selfrequest;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SelfRequestApplication {
    private static final Logger logger = LogManager.getLogger(SelfRequestApplication.class);



    public static void main(String[] args) {
        SpringApplication.run(SelfRequestApplication.class, args);
        logger.trace("Entering application...");


        logger.trace("Trace logger works if needed");
        logger.debug("Debug logger works");
        logger.info("Info logger works");
        logger.warn("Warning logger works");
        logger.error("Error logger works");
        logger.fatal("Fatal logger works");


    }
}
