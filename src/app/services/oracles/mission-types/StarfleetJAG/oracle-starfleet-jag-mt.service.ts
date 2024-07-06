import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleStarfleetJAGMTService extends OracleBaseService{

  public override title: string = "Starfleet JAG";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Advise Starfleet on enemy species";
        case 2: return "Advise Starfleet on territory boundaries"
        case 3: return "Argue case on behalf of former admiral";
        case 4: return "Conduct forensics investigation at crime scene";
        case 5: return "Defend fellow crew member in alien court";
        case 6: return "Defend Starfleet officer in court";
        case 7: return "Discipline rowdy cadets";
        case 8: return "Investigate corrupt judge";
        case 9: return "Investigate destruction of relay station";
        case 10: return "Investigate wrongful death"
        case 11: return "Negotiate land settlement";
        case 12: return "Prosecute contraband case";
        case 13: return "Prosecute environmental crime";
        case 14: return "Prosecute errant captain"; 
        case 15: return "Prosecure war crime";
        case 16: return "Review rules of engagement";
        case 17: return "Serve on court martial case";
        case 18: return "Serve subpoena to reclusive Starfleet individual";
        case 19: return "Transport JAG to court hearing";
        case 20: return "Unconver tainted evidence";
        default: return "Roll Again";
    }
  }
}
