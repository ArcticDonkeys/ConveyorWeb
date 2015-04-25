/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.domain;

/**
 *
 * @author OnurYilmaz
 */
public class Building {
    private double buildingLat;
    private double buildingLon;
    private int buildingAge;
    private int buildingFloor;
    private String buildingConstructionMaterial;
    private String buildingGround;
    private String buildingDistrict;
    private int buildingNumOfRooms;
    private String buildingHeatMaterial;
    private String buildingStatus;
    private double risk;

    public Building() {
    }

    public Building( double buildingLat, double buildingLon, int buildingAge, int buildingFloor, String buildingConstructionMaterial, String buildingGround, String buildingDistrict, int buildingNumOfRooms, String buildingHeatMaterial, String buildingStatus,double risk) {
        this.buildingLat = buildingLat;
        this.buildingLon = buildingLon;
        this.buildingAge = buildingAge;
        this.buildingFloor = buildingFloor;
        this.buildingConstructionMaterial = buildingConstructionMaterial;
        this.buildingGround = buildingGround;
        this.buildingDistrict = buildingDistrict;
        this.buildingNumOfRooms = buildingNumOfRooms;
        this.buildingHeatMaterial = buildingHeatMaterial;
        this.buildingStatus = buildingStatus;
        this.risk = 0.0;
    }

    public String getBuildingStatus() {
        return buildingStatus;
    }

    public void setBuildingStatus(String buildingStatus) {
        this.buildingStatus = buildingStatus;
    }

    

    public double getBuildingLat() {
        return buildingLat;
    }

    public void setBuildingLat(double buildingLat) {
        this.buildingLat = buildingLat;
    }

    public double getBuildingLon() {
        return buildingLon;
    }

    public void setBuildingLon(double buildingLon) {
        this.buildingLon = buildingLon;
    }

    public int getBuildingAge() {
        return buildingAge;
    }

    public void setBuildingAge(int buildingAge) {
        this.buildingAge = buildingAge;
    }

    public int getBuildingFloor() {
        return buildingFloor;
    }

    public void setBuildingFloor(int buildingFloor) {
        this.buildingFloor = buildingFloor;
    }

    public String getBuildingConstructionMaterial() {
        return buildingConstructionMaterial;
    }

    public void setBuildingConstructionMaterial(String buildingConstructionMaterial) {
        this.buildingConstructionMaterial = buildingConstructionMaterial;
    }

    public String getBuildingGround() {
        return buildingGround;
    }

    public void setBuildingGround(String buildingGround) {
        this.buildingGround = buildingGround;
    }

    public String getBuildingDistrict() {
        return buildingDistrict;
    }

    public void setBuildingDistrict(String buildingDistrict) {
        this.buildingDistrict = buildingDistrict;
    }

    public int getBuildingNumOfRooms() {
        return buildingNumOfRooms;
    }

    public void setBuildingNumOfRooms(int buildingNumOfRooms) {
        this.buildingNumOfRooms = buildingNumOfRooms;
    }

    public String getBuildingHeatMaterial() {
        return buildingHeatMaterial;
    }

    public void setBuildingHeatMaterial(String buildingHeatMaterial) {
        this.buildingHeatMaterial = buildingHeatMaterial;
    }

    public double getRisk() {
        return risk;
    }

    public void setRisk(double risk) {
        this.risk = risk;
    }
    
    
    
}
