/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.dao;

import com.arcticdonkeys.conveyor.domain.Building;
import com.arcticdonkeys.conveyor.jdbc.BuildingRowMapper;
import java.util.ArrayList;
import java.util.List;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author OnurYilmaz
 */
public class BuildingDaoImpl implements BuildingDao{

    @Autowired
    DataSource dataSource;
    
    @Override
    public void insertBuilding(Building building) {
        String sql = "INSERT INTO `conveyordb`.`BuildingTest` (`buildingID`, `buildingLat`, `buildingLon`, `buildingAge`, `buildingFloor`, `buildingConstructionMaterial`, `buildingGround`, `buildingDistrict`, `buildingNumOfRoom`, `buildingHeatMaterial`) VALUES ('2', '100', '102', '8', '8', 'mat', 'ground', 'dist', '5', 'heat')";
        
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        
        jdbcTemplate.update(sql, new Object[]{
            building.getBuildingLat(),
            building.getBuildingLon(),
            building.getBuildingAge(),
            building.getBuildingFloor(),
            building.getBuildingConstructionMaterial(),
            building.getBuildingGround(),
            building.getBuildingDistrict(),
            building.getBuildingNumOfRooms(),
            building.getBuildingHeatMaterial(),
            building.getBuildingStatus(),
            building.getRisk()});
        
    }

    @Override
    public List<Building> listBuildings() {
        
        List buildingList = new ArrayList();
        
        String sql = "SELECT * FROM `conveyordb`.`BuildingTest`";
        
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        
        buildingList = jdbcTemplate.query(sql, new BuildingRowMapper());
        
        return buildingList;
    }
    
}
