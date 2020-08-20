package com.selfrequest.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity //tells JPA that it's an entity, going to end up in table "Visitor"
public class Visitor {

    private @Id @GeneratedValue Long id; //tells JPA which one is id and that it is
                                         //to be generated automatically
    private LocalDateTime dateTimeCreated;
    private String name;
    private String visiting; //toMeet
    private String company; //companyRepresenting
    private String phoneNr;
    private String category; //visitorCategory
    private boolean isInstructed; //instructed
    private String accessCardID;
    private boolean isActive;
    private LocalDateTime dateTimeLeft;

    public Visitor() { } //JPA wants this line

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateTimeCreated() {
        return dateTimeCreated;
    }

    public void setDateTimeCreated(LocalDateTime dateTimeCreated) {
        this.dateTimeCreated = dateTimeCreated;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVisiting() {
        return visiting;
    }

    public void setVisiting(String visiting) {
        this.visiting = visiting;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPhoneNr() {
        return phoneNr;
    }

    public void setPhoneNr(String phoneNr) {
        this.phoneNr = phoneNr;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean getIsInstructed() {
        return isInstructed;
    }

    public void setIsInstructed(boolean isInstructed) {
        this.isInstructed = isInstructed;
    }

    public String getAccessCardID() {
        return accessCardID;
    }

    public void setAccessCardID(String accessCardID) {
        this.accessCardID = accessCardID;
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

        Visitor v = (Visitor) obj;

        return v.name.equals(this.name) &&
                v.visiting.equals(this.visiting) &&
                v.company.equals(this.company) &&
                v.phoneNr.equals(this.phoneNr) &&
                v.category.equals(this.category) &&
                v.isInstructed == this.isInstructed &&
                v.accessCardID.equals(this.accessCardID);


    }

}
