import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleTacticalMTService extends OracleBaseService{

  public override title: string = "Tactical";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Admiral on board issues questionable order";
        case 2: return "Analyze enemy ship construction rates"
        case 3: return "Analyze weapon signatures";
        case 4: return "Appointed fleet commander";
        case 5: return "Blow something up";
        case 6: return "Borg incursion";
        case 7: return "Buy evacuees time to escape";
        case 8: return "Employ damage control teams";
        case 9: return "Engineer tactical advantage";
        case 10: return "Ground combat required"
        case 11: return "Negotiate cease-fire";
        case 12: return "Orbital bombardment";
        case 13: return "Plan battle";
        case 14: return "Provide ally tactical advice"; 
        case 15: return "Provide Starfleet ship deployment strategy";
        case 16: return "Put in place medical and rescue personnel";
        case 17: return "Reverse-engineer weapons technology";
        case 18: return "Run tactical drills";
        case 19: return "Swap executive officers";
        case 20: return "Use knowledge of local space to gain advantage";
        default: return "Roll Again";
    }
  }
}
