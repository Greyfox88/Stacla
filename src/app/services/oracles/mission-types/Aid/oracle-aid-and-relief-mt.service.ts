import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleAidAndReliefMTService extends OracleBaseService{

  public override title: string = "Aid and Relief";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Discover stowaway on another ship";
        case 2: return "Ensure key data is transmitted";
        case 3: return "Ferry food to famine-stricken world";
        case 4: return "Find lost escape pod";
        case 5: return "Fulfil dying officer's last wish";
        case 6: return "Help build back a failed economy";
        case 7: return "Improve sensors to detect hostiles";
        case 8: return "Investigate why convoy is under attack";
        case 9: return "Locate ship lost in anomoly";
        case 10: return "Negotiate trade agreement to save species"
        case 11: return "Plot course for convoy";
        case 12: return "Prevent natural disaster with science";
        case 13: return "Protect merchant convoy"
        case 14: return "Provide aid to an enemy"; 
        case 15: return "Provide counseling services to distressed parties";
        case 16: return "Provide needed resoruce to station or ship";
        case 17: return "Provide power to ship or colony";
        case 18: return "Repair colony's defence grid";
        case 19: return "Respond to planetary distress call";
        case 20: return "Upgrade civilian ships";
        default: return "Roll Again";
    }
  }
}