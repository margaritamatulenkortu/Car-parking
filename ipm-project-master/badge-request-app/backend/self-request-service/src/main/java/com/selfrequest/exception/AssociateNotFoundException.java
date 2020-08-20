package com.selfrequest.exception;

public class AssociateNotFoundException extends RuntimeException {
    public AssociateNotFoundException(Long id) {
        super("Could not find associate " + id);
    }
}
