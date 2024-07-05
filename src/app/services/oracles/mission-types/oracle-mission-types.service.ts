import { Injectable } from '@angular/core';
import { OracleBaseService } from '../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleMissionTypesService extends OracleBaseService{

  public override title: string = "Mission Types";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Aid and Relief";
        case 2: return "Conspiracy";
        case 3: return "Deep Space Exploration";
        case 4: return "Defence";
        case 5: return "Diplomacy";
        case 6: return "Escort and Evacuation";
        case 7: return "Espionage";
        case 8: return "First Contact";
        case 9: return "Medical";
        case 10: return "Near Space Exploration"
        case 11: return "Patrol";
        case 12: return "Planetary Exploration";
        case 13: return "Political"
        case 14: return "Research and Development"; 
        case 15: return "Show the Flag";
        case 16: return "Spiritual";
        case 17: return "Starfleet JAG";
        case 18: return "Tactical";
        case 19:
        case 20:                
                let missionA = this.rollerService.roll(0,1,18);
                let missionB = this.rollerService.roll(0,1,18);
                while(missionB===missionA)
                    missionB = this.rollerService.roll(0,1,18);
                return this.getResult(missionA) + " AND " + this.getResult(missionB);                
        default: return "Roll Again";
    }
  }
}