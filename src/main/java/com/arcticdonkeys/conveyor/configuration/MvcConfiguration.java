/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.configuration;

import com.arcticdonkeys.conveyor.classes.Building;
import com.arcticdonkeys.conveyor.dao.CBuildingDAO;
import com.arcticdonkeys.conveyor.dao.IBuildingDAO;
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 *
 * @author OnurYilmaz
 */

@Configuration
@EnableWebMvc
public class MvcConfiguration extends WebMvcConfigurerAdapter{
    
    @Bean
    public DataSource getDataSource()
    {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/ConveyorWeb");
        dataSource.setUsername("root");
        dataSource.setPassword("33on64R9");
        
        return dataSource;
    }
    
    
    @Bean
    public IBuildingDAO getContactDAO() {
        return new CBuildingDAO(getDataSource());
    }
    
}
