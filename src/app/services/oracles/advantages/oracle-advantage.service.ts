import { Injectable } from '@angular/core';
import { OracleBaseService } from '../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleAdvantageService extends OracleBaseService{

  public override title: string = "Advantages";

  constructor() { super() }

  // TODO - Add descriptions
  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "A Chance Encounter";
        case 2: return "Surplus Components";
        case 3: return "Surprise Discovery";
        case 4: return "Remember Your Training";
        case 5: return "Second Wind";
        case 6: return "Helpful Species - Primitive";
        case 7: return "Helpful Species - Contemporaries";
        case 8: return "Helpful Species - Advanced";
        case 9: return "An Ancient Discovery";
        case 10: return "Federation Assitance"
        case 11: return "Change of Heart";
        case 12: return "Redundant Systems";
        case 13: return "Lucky Circumstances"
        case 14: return "Beneficial Element"; 
        case 15: return "Inspiring Vista";
        case 16: return "Historic Precedent";
        case 17: return "Advanced Prototype";
        case 18: return "Critical Evidence";
        case 19: return "Power Surge"
        case 20:                
                let missionA = this.rollerService.roll(0,1,19);
                let missionB = this.rollerService.roll(0,1,19);
                while(missionB===missionA)
                    missionB = this.rollerService.roll(0,1,19);
                return this.getResult(missionA) + " AND " + this.getResult(missionB);                
        default: return "Roll Again";
    }
  }
}
