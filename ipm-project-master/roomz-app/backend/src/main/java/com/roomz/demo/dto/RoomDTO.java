package com.roomz.demo.dto;

public class RoomDTO {
    private int id;
    private String roomName;
    private int roomFloor;
    private int maxCapacity;
    private boolean isAvailable;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return roomName;
    }

    public void setName(String roomName) {
        this.roomName = roomName;
    }

    public int getFloor() {
        return roomFloor;
    }

    public void setFloor(int roomFloor) {
        this.roomFloor = roomFloor;
    }

    public int getMaxCapacity() {
        return maxCapacity;
    }

    public void setMaxCapacity(int maxCapacity) {
        this.maxCapacity = maxCapacity;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

}
