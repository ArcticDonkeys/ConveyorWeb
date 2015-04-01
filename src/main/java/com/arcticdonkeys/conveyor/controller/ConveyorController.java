/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.arcticdonkeys.conveyor.classes.AttenuationAlgorithm;

/**
 *
 * @author OnurYilmaz
 */
@Controller
public class ConveyorController {

    
    
    @RequestMapping(value = "/login.html", method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    @RequestMapping(value = "/mainpage.html", method = RequestMethod.GET)
    public String mainpage() {
        
        
        return "mainpage";
    }

    @RequestMapping(value = "/mainpage.html", method = RequestMethod.POST)
    public void getAttenuationInputs(String latData, String lonData, String magData, String focData) {
        AttenuationAlgorithm aa = new AttenuationAlgorithm();
        double result = aa.attenuation(Double.parseDouble(magData),
                                       Double.parseDouble(latData), 
                                       Double.parseDouble(lonData), 40.123, 31.67, 
                                       Double.parseDouble(focData), 2);
        System.out.println(result);
    }
}
