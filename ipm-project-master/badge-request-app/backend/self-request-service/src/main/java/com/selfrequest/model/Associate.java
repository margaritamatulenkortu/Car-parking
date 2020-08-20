package com.selfrequest.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity //tells JPA that it's an entity, going to end up in table "Visitor"
public class Associate {

    private @Id
    @GeneratedValue
    Long id; //tells JPA which one is id and that it is
    //to be generated automatically
    private LocalDateTime dateTimeCreated;
    private String associateId;
    private String phoneNr;
    private String accessCardID;
    private String laptopNr;
    private String lostReason;
    private boolean isActive;
    private LocalDateTime dateTimeLeft;

    public Associate() {
    } //JPA wants this line

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDateTimeCreated(LocalDateTime dateTimeCreated) {
        this.dateTimeCreated = dateTimeCreated;
    }

    public LocalDateTime getDateTimeCreated() {
        return dateTimeCreated;
    }

    public String getAssociateId() {
        return associateId;
    }

    public void setAssociateId(String associateId) {
        this.associateId = associateId;
    }

    public String getPhoneNr() {
        return phoneNr;
    }

    public void setPhoneNr(String phoneNr) {
        this.phoneNr = phoneNr;
    }

    public String getLostReason() {
        return lostReason;
    }

    public void setLostReason(String lostReason) {
        this.lostReason = lostReason;
    }

    public String getAccessCardID() {
        return accessCardID;
    }

    public void setAccessCardID(String accessCardID) {
        this.accessCardID = accessCardID;
    }

    public String getLaptopNr() {
        return laptopNr;
    }

    public void setLaptopNr(String laptopID) {
        this.laptopNr = laptopID;
    }
    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public LocalDateTime getDateTimeLeft() {
        return dateTimeLeft;
    }

    public void setDateTimeLeft(LocalDateTime dateTimeLeft) {
        this.dateTimeLeft = dateTimeLeft;
    }

    /**
     * This equals method returns true if values that are *SET BY USER* (NOT date/time, ID)
     * are the same in both objects.
     *
     * @param obj to compare
     * @return boolean
     */
    @Override
    public boolean equals(Object obj) {

        if (obj == this) {
            return true;
        }

        if (obj == null || obj.getClass() != this.getClass()) {
            return false;
        }

        Associate a = (Associate) obj;

        return a.associateId.equals(this.associateId) &&
                a.phoneNr.equals(this.phoneNr) &&
                a.laptopNr.equals(this.laptopNr) &&
                a.lostReason.equals(this.lostReason) &&
                a.accessCardID.equals(this.accessCardID);


    }

}
