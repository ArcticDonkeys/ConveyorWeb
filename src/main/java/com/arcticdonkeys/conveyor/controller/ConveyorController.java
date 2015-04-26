/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.arcticdonkeys.conveyor.classes.AttenuationAlgorithm;
import com.arcticdonkeys.conveyor.domain.Building;
import com.arcticdonkeys.conveyor.services.BuildingService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author OnurYilmaz
 */
@Controller
public class ConveyorController {
    @Autowired
    BuildingService buildingService;
    public static List<Building> buildingList = new ArrayList<>();
    
    
    @RequestMapping(value = "/login.html", method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    @RequestMapping(value = "/mainpage.html", method = RequestMethod.GET)
    public String mainpage() {
        
        //buildingList = buildingService.listBuildings();
        return "mainpage";
    }

    @RequestMapping(value = "/mainpage.html", method = RequestMethod.POST)
    public void getAttenuationInputs(String latData, String lonData, String magData, String focData) {
        ArrayList<Double> treeResult = new ArrayList<>();
        AttenuationAlgorithm aa = new AttenuationAlgorithm();
        double result = aa.attenuation(Double.parseDouble(magData),
                                       Double.parseDouble(latData), 
                                       Double.parseDouble(lonData), 40.123, 31.67, 
                                       Double.parseDouble(focData), 2);
        System.out.println(result);
        treeResult = aa.decisionTree();
        for(int i= 0; i<treeResult.size(); i+=3)
        {
            if(i < treeResult.size()/3)
             System.out.println("{location: new google.maps.LatLng(" + treeResult.get(i) + ", " + treeResult.get(i+1) + "), weight: " + 0.1 + "},");
            else if(i < 2*treeResult.size()/3)
             System.out.println("{location: new google.maps.LatLng(" + treeResult.get(i) + ", " + treeResult.get(i+1) + "), weight: " + 0.5 + "},");
            else
             System.out.println("{location: new google.maps.LatLng(" + treeResult.get(i) + ", " + treeResult.get(i+1) + "), weight: " + 1 + "},");
        }
    }
}
