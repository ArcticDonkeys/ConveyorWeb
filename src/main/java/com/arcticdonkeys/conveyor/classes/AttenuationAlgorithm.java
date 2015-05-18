
package com.arcticdonkeys.conveyor.classes;

/**
 *
 * @author Arda
 */
import com.arcticdonkeys.conveyor.controller.ConveyorController;
import com.arcticdonkeys.conveyor.domain.Building;
import com.arcticdonkeys.conveyor.services.BuildingService;
import java.lang.Math;
import java.util.ArrayList;
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

    public ArrayList<Double> decisionTree() {

        ArrayList<Double> resultArray = new ArrayList<>();
        System.out.println(ConveyorController.buildingList.size());
        for (Building building : ConveyorController.buildingList) {
            String buildingType = building.getBuildingConstructionMaterial();
            String buildingCondition = building.getBuildingStatus();
            int numberOfStorey = building.getBuildingFloor();
            int buildingAge = building.getBuildingAge();
            double lat = building.getBuildingLat();
            double lon = building.getBuildingLon();
            double result = 1;
            resultArray.add(lat);
            resultArray.add(lon);
            switch (buildingType) {
                case "agac":
                    result *= 0.01;
                    break;
                case "briket":
                    result *= 0.6;
                    break;
                case "tas":
                    result *= 0.8;
                    break;
                case "tugla":
                    result *= 0.4;
                    break;
                case "beton":
                    result *= 0.2;
                    break;
            }
            
            switch (buildingCondition) {
                case "TadilatYok":
                    result *= 0.01;
                    break;
                case "BasitTamir":
                    result *= 0.35;
                    break;
                case "EsasliTamir":
                    result *= 0.67;
                    break;
                case "Harap":
                    result *= 0.99;
                    break;
            }
            
            switch (numberOfStorey) {
                case 1:
                    result *= 0.01;
                    break;
                case 2:
                    result *= 0.17;
                    break;
                case 3:
                    result *= 0.32;
                    break;
                case 4:
                    result *= 0.5;
                    break;
                case 5:
                    result *= 0.67;
                    break;
                case 6:
                    result *= 0.82;
                    break;
                case 7:
                    result *= 0.99;
                    break;  
                case 8:
                    result *= 0.99;
                    break;
                case 9:
                    result *= 0.99;
                    break;
                case 10:
                    result *= 0.99;
                    break;     
            }
            
            switch (buildingAge) {
                case 1929:
                    result *= 0.56;
                    break;
                case 1930:
                    result *= 0.46;
                    break;
                case 1940:
                    result *= 0.34;
                    break;
                case 1950:
                    result *= 0.22;
                    break;
                case 1960:
                    result *= 0.12;
                    break;
                case 1970:
                    result *= 0.79;
                    break;
                case 1980:
                    result *= 0.90;
                    break;  
                case 1990:
                    result *= 0.99;
                    break;
                default:
                    result *= 0.01;
                    break;
            }
            
            resultArray.add(result);
        }
        return resultArray;
                

    }
}
