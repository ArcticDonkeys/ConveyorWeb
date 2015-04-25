
package com.arcticdonkeys.conveyor.classes;

/**
 *
 * @author Arda
 */
import com.arcticdonkeys.conveyor.controller.ConveyorController;
import com.arcticdonkeys.conveyor.domain.Building;
import com.arcticdonkeys.conveyor.services.BuildingService;
import java.lang.Math;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

public class AttenuationAlgorithm {
    @Autowired
    BuildingService buildingService;

    public double attenuation(double magnitude, double latOfEarthquake,
            double lonOfEarthquake, double latOfBuilding, double lonOfBuilding,
            double focalDepth, int ground) {
        double groundMotion = 0;
        double b1 = 0, b2 = 0, b3 = 0, b5 = 0, bv = 0;
        double vs = 0, va = 0;
        switch (ground) {
            case 1:
                b1 = 1.23325;
                b2 = 0.5770625;
                b3 = -0.090125;
                b5 = -0.9955;
                bv = -0.27075;
                vs = 700;
                va = 1763.4375;
                break;
            case 2:
                b1 = 0.0556875;
                b2 = 0.811625;
                b3 = -0.1699375;
                b5 = -0.7785;
                bv = -0.2873125;
                vs = 450;
                va = 1933.1875;
                break;
            case 3:
                b1 = -1.328142857;
                b2 = 1.187071429;
                b3 = -0.260357143;
                b5 = -0.679642857;
                bv = -0.49;
                vs = 200;
                va = 2008.142857143;
                break;
            default:
                break;
        }
        groundMotion = b1
                + b2
                * (magnitude - 6)
                + b3
                * (magnitude - 6)
                * (magnitude - 6)
                + b5
                * Math.log(Math.pow((Math.pow(
                                        joynerBooreDistance(latOfEarthquake, lonOfEarthquake,
                                                latOfBuilding, lonOfBuilding), 2) + focalDepth
                                * focalDepth), 1 / 2));
        groundMotion += bv * Math.log(vs / va);
        groundMotion = Math.pow(2.71828182846, groundMotion);
        return groundMotion;
    }

    public double joynerBooreDistance(double latOfEarthquake,
            double lonOfEarthquake, double latOfBuilding, double lonOfBuilding) {
        return Math.sqrt(Math.pow((latOfEarthquake - latOfBuilding), 2)
                + Math.pow((lonOfEarthquake - lonOfBuilding), 2)) / 1000;
    }

    public int decisionTree() {
        
        for (Building building : ConveyorController.buildingList) {
             System.out.printf( "\t%.15f\n", building.getBuildingLat());
             System.out.println("");
         
        }
        return 5;
    }
}
