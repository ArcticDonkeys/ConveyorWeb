/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.classes;

/**
 *
 * @author OnurYilmaz
 */
public class Building {
    private int buildingID;
    private int numberOfFloor;
    private int ageOfBuilding;

    public Building(int buildingID, int numberOfFloor, int ageOfBuilding) {
        this.buildingID = buildingID;
        this.numberOfFloor = numberOfFloor;
        this.ageOfBuilding = ageOfBuilding;
    }

    public int getBuildingID() {
        return buildingID;
    }

    public void setBuildingID(int buildingID) {
        this.buildingID = buildingID;
    }

    public int getNumberOfFloor() {
        return numberOfFloor;
    }

    public void setNumberOfFloor(int numberOfFloor) {
        this.numberOfFloor = numberOfFloor;
    }

    public int getAgeOfBuilding() {
        return ageOfBuilding;
    }

    public void setAgeOfBuilding(int ageOfBuilding) {
        this.ageOfBuilding = ageOfBuilding;
    }
    
    
}
