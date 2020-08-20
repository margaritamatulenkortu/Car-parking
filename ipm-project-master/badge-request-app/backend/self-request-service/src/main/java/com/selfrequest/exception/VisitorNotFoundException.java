package com.selfrequest.exception;
/**
 * An exception to throw if visitor wasn't found
 */
public class VisitorNotFoundException extends RuntimeException {

    public VisitorNotFoundException(Long id) {
        super("Could not find visitor " + id);
    }
}
