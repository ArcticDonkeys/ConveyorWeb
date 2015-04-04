/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.jdbc;

import com.arcticdonkeys.conveyor.domain.Building;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

/**
 *
 * @author OnurYilmaz
 */
public class BuildingRowMapper implements RowMapper<Building>{

    @Override
    public Building mapRow(ResultSet rs, int i) throws SQLException {

        BuildingExtractor buildingExtractor = new BuildingExtractor();
        return buildingExtractor.extractData(rs);
    }
    
    
    
}
