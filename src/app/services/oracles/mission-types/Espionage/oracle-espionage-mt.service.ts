import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleEspionageMTService extends OracleBaseService{

  public override title: string = "Defence";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Analyze captured prisoners";
        case 2: return "Analyze data to uncover plot"
        case 3: return "Collect data";
        case 4: return "Cosmetic surgery required";
        case 5: return "Decrypt message";
        case 6: return "Establish underworld contact";
        case 7: return "Faction sabotages negotiations";
        case 8: return "Fall off the frid to perform mission";
        case 9: return "Find weapons cache";
        case 10: return "Forensics investigation tainted"
        case 11: return "Infiltrate criminal gang or terrorist organisation";
        case 12: return "Intercept comm chatter";
        case 13: return "Monitor ship movements"
        case 14: return "Present evidence of conspiracy"; 
        case 15: return "Psychographic debriefing required";
        case 16: return "Psyops required";
        case 17: return "Recover hostages from unfriendly territory";
        case 18: return "Section 31 assignment";
        case 19: return "Spies discovered";
        case 20: return "Undercover operation into enemy territory";
        default: return "Roll Again";
    }
  }
}
