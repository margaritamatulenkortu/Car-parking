package com.roomz.demo.exception;

public class GeneralApiException extends RuntimeException {

    public GeneralApiException(String message) {
        super(message);
    }

    public GeneralApiException(String message, Throwable cause) {
        super(message, cause);
    }

}
