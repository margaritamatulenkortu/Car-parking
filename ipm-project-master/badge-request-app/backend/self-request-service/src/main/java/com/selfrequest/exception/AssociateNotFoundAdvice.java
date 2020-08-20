package com.selfrequest.exception;

import com.selfrequest.exception.VisitorNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Render an HTTP 404
 */
@ControllerAdvice
public class AssociateNotFoundAdvice {

    /**
     * Make an exception handler
     *
     * @param ex the associate not found exception
     * @return error message
     */
    @ResponseBody
    @ExceptionHandler(AssociateNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String associateNotFoundHandler(AssociateNotFoundException ex) {
        return ex.getMessage();
    }
}