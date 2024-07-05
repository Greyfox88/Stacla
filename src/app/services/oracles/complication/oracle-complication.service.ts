import { Injectable } from '@angular/core';
import { OracleBaseService } from '../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleComplicationService extends OracleBaseService{

  public override title: string = "Complications";

  constructor() { super() }

  // TODO - Add descriptions
  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Total Catastrophe";
        case 2: return "Inferior Equipment";
        case 3: return "Random Failure";
        case 4: return "Horrific Discovery";
        case 5: return "Crisis of Conscience";
        case 6: return "Unexpected Attack";
        case 7: return "Disease Outbreak";
        case 8: return "Environmental Danger";
        case 9: return "Sudden Reversal";
        case 10: return "Absolute Bedlam"
        case 11: return "Conflicting Orders";
        case 12: return "Shattered Chain of Command";
        case 13: return "Infiltrator"
        case 14: return "Mesmerized Crew"; 
        case 15: return "Overworked Crew";
        case 16: return "Diplomatic Incident";
        case 17: return "Inept Crewmember";
        case 18: return "Massive Casualties";
        case 19: return "More Valuable Than Useful"
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
