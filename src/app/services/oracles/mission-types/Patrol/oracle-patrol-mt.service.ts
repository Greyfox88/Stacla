import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OraclePatrolMTService extends OracleBaseService{

  public override title: string = "Patrol";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Analyze sensor readings on unknown ship";
        case 2: return "Away team patrols colony"
        case 3: return "Enemy blockade";
        case 4: return "Establish new patrol route";
        case 5: return "Find lost vessel";
        case 6: return "Install new sensor array";
        case 7: return "Investiate enemy fleet movements";
        case 8: return "Investiate strange event or anomoly";
        case 9: return "Long patrol; holodeck time";
        case 10: return "Monitor comm traffic"
        case 11: return "Negotiate patrol route";
        case 12: return "New warp-capable civilization contacted";
        case 13: return "Patrol hotspot (e.g., Cardassian Demilitarized Zone or Romulan Neutral Zone)";
        case 14: return "Repair collapsed defence grid"; 
        case 15: return "Rogue planet drifts into trade route";
        case 16: return "Search and rescue mission";
        case 17: return "Search detained vessel";
        case 18: return "Space mines inhibit movement";
        case 19: return "Survey a planetary surface";
        case 20: return "Tech floating adrift in space";
        default: return "Roll Again";
    }
  }
}
