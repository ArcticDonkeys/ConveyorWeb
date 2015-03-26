/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arcticdonkeys.conveyor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author OnurYilmaz
 */

@Controller
public class ConveyorController {
    
    @RequestMapping(value="/login.html", method = RequestMethod.GET)
    public String login(){
        return "login";
    }
    
    @RequestMapping(value="/mainpage.html", method = RequestMethod.GET)
    public String mainpage()
    {
        return "mainpage";
    }    
}