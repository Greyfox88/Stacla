import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleNearSpaceExplorationMTService extends OracleBaseService{

  public override title: string = "Near Space Exploration";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Alien probe enters Federation space";
        case 2: return "Art competition/show off your talents"
        case 3: return "Collect data on spatial anomoly";
        case 4: return "Crew member (or you) becomes a celebrity";
        case 5: return "Dedicate new colony";
        case 6: return "Dedicate new ship";
        case 7: return "Eliminate dangerous spatial phenomena";
        case 8: return "Enemy faction has established peaceful colony";
        case 9: return "Enemy polity makes a power grab";
        case 10: return "Family comes to visit"
        case 11: return "Host meeting with admirals";
        case 12: return "Lost starbase";
        case 13: return "New and different Bajoran orb discovered"
        case 14: return "New mineral or energy resource under dispute"; 
        case 15: return "New planet appears in Federation space";
        case 16: return "Seek permission from Starfleet to conduct fringe research";
        case 17: return "Sensors detect hidden foe";
        case 18: return "Sojourn back to homeworld";
        case 19: return "Treaty violations must be investigated";
        case 20: return "Visit local pleasure planet";
        default: return "Roll Again";
    }
  }
}
