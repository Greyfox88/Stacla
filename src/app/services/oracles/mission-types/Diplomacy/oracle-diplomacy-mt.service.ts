import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleDiplomacyMTService extends OracleBaseService{

  public override title: string = "Diplomacy";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Attend official event";
        case 2: return "Conduct anti-propogands campaign"
        case 3: return "Draft peace treaty";
        case 4: return "Establish trade routes";
        case 5: return "Facilitate government restructure";
        case 6: return "Host cultural exchange";
        case 7: return "Implement new policy";
        case 8: return "Implement training program";
        case 9: return "Investigate civil unrest";
        case 10: return "Mediate between rival factions"
        case 11: return "Negotiate release of political prisoner";
        case 12: return "Negotiate surrender";
        case 13: return "Negotiate trade deal"
        case 14: return "Serve as advisory committee"; 
        case 15: return "Set up Starfleet Academy extension";
        case 16: return "Settle border conflict";
        case 17: return "Settle international dispute";
        case 18: return "Settle interplanetary dispute";
        case 19: return "Sign mining accord";
        case 20: return "Oversee election";
        default: return "Roll Again";
    }
  }
}
