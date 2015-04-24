/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.jdbc;

import com.arcticdonkeys.conveyor.domain.Building;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

/**
 *
 * @author OnurYilmaz
 */
public class BuildingExtractor implements ResultSetExtractor<Building>{

    @Override
    public Building extractData(ResultSet rs) throws SQLException, DataAccessException {

        Building building = new Building();
        
        building.setBuildingLat(rs.getFloat(1));
        building.setBuildingLon(rs.getFloat(2));
        building.setBuildingAge(rs.getInt(3));
        building.setBuildingFloor(rs.getInt(4));
        building.setBuildingConstructionMaterial(rs.getString(5));
        building.setBuildingGround(rs.getString(6));
        building.setBuildingDistrict(rs.getString(7));
        building.setBuildingNumOfRooms(rs.getInt(8));
        building.setBuildingHeatMaterial(rs.getString(9));
        building.setBuildingStatus(rs.getString(10));
        building.setRisk(rs.getFloat(11));
        
        return building;
    }
    
}
