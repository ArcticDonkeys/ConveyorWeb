/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.services;

import com.arcticdonkeys.conveyor.dao.BuildingDao;
import com.arcticdonkeys.conveyor.domain.Building;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author OnurYilmaz
 */
public class BuildingServiceImpl implements BuildingService{

    @Autowired
    BuildingDao buildingDao;
    
    @Override
    public void insertBuilding(Building building) {
        
        buildingDao.insertBuilding(building);
        
    }

    @Override
    public List<Building> listBuildings() {
        
        return buildingDao.listBuildings();
        
    }
    
}
