import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleShowTheFlagMTService extends OracleBaseService{

  public override title: string = "Show the Flag";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Assist in building terraforming facilities";
        case 2: return "Construct water system on planet"
        case 3: return "Dedicate new space station";
        case 4: return "Deliver supplies to colony along Neutral Zone";
        case 5: return "Develop a new strain of disease-resistant food";
        case 6: return "Help alien species naviate safe trade route";
        case 7: return "Help rival cure disease";
        case 8: return "Lay claim to a planet";
        case 9: return "Plant the flag on a moon";
        case 10: return "Provide guidance on terraforming"
        case 11: return "Reinforce collapsed mineshaft";
        case 12: return "Repair malfunctioning weather control system";
        case 13: return "Secure asteroid for mining";
        case 14: return "Set up schools"; 
        case 15: return "Set up social program after a disaster";
        case 16: return "Stop an asteroid from hitting planet";
        case 17: return "Stop hostiles from harrassing colony";
        case 18: return "Track down pirates";
        case 19: return "Transport staff to relay station";
        case 20: return "Visit new member world";
        default: return "Roll Again";
    }
  }
}
