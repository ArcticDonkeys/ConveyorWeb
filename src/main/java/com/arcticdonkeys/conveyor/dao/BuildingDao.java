/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.dao;

import com.arcticdonkeys.conveyor.domain.Building;
import java.util.List;

/**
 *
 * @author OnurYilmaz
 */
public interface BuildingDao {
    public void insertBuilding(Building building);
    public List<Building> listBuildings();
}
