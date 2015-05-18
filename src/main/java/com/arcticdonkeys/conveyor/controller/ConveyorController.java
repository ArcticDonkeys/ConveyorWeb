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
import javax.json.Json;
import javax.json.JsonObject;
import static javax.ws.rs.client.Entity.json;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.springframework.http.converter.json.Jackson2ObjectMapperBuilder.json;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author OnurYilmaz
 */
@Controller
public class ConveyorController {
    @Autowired
    BuildingService buildingService;
    public double result;
     public ArrayList<Double> treeResult = new ArrayList<>();
    public static List<Building> buildingList = new ArrayList<>();
    
    
    @RequestMapping(value = "/login.html", method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    @RequestMapping(value = "/mainpage.html", method = RequestMethod.GET)
    public String mainpage() {
        
        buildingList = buildingService.listBuildings();
        return "mainpage";
    }

    @RequestMapping(value = "/mainpage.html", method = RequestMethod.POST, produces = "text/plain")
    public @ResponseBody String getAttenuationInputs(String latData, String lonData, String magData, String focData) {
       
        AttenuationAlgorithm aa = new AttenuationAlgorithm();
       result = aa.attenuation(Double.parseDouble(magData),
                                       Double.parseDouble(latData), 
                                       Double.parseDouble(lonData), 40.123, 31.67, 
                                       Double.parseDouble(focData), 2);
        //System.out.println(result);
        treeResult = aa.decisionTree();
        //System.out.println(treeResult.size());
        String output = "";
        
        for(int i= 0; i<treeResult.size(); i+=3)
        {
            
           output += Double.toString(treeResult.get(i));
           output += " ";
           output += Double.toString(treeResult.get(i+1));
           output += " ";
           output += Double.toString(treeResult.get(i+2));
           if(i!=treeResult.size()-1)output += ",";
           
        }
        
        
        return output;
        
        //return "abdsfsdfsdfc";
        
       
       
    }
     @RequestMapping(value = "/sendOutput.html", method = RequestMethod.GET)
     public @ResponseBody String sendOutput(ModelMap model)
    {
      return "essol";
       
        
        
   


    }
    
    
}
