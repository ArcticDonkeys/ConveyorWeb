/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.dao;

import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author OnurYilmaz
 */
public class CBuildingDAO implements IBuildingDAO{
    private JdbcTemplate jdbcTemplate;

    public CBuildingDAO(DataSource ds) {
        jdbcTemplate = new JdbcTemplate(ds);
    }

    @Override
    public void createTable() {
        String sql = "CREATE TABLE Building("
                + "BuildingID int, "
                + "BuildingFloor int,"
                + "BuildingAge int)";
        
        jdbcTemplate.update(sql);
        
    }
    
    
}
