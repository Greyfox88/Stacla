import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleConspiracyMTService extends OracleBaseService {
  
  public override title: string = "Conspiracy";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Allied with Enemies";
        case 2: return "Assassination Planned";
        case 3: return "Conspiracy theory gone wild";
        case 4: return "Corrupt Starfleet official";
        case 5: return "Crewmate lying";
        case 6: return "Faked death";
        case 7: return "Government undermined from within";
        case 8: return "Informant discloses secrets";
        case 9: return "Intelligence leak";
        case 10: return "Intercepted messages"
        case 11: return "Misleading propoganda";
        case 12: return "New tech is spyware";
        case 13: return "Offical bribed"
        case 14: return "Paranoid pre-warp species"; 
        case 15: return "Politician poisoned or attacked";
        case 16: return "Possessed by alien entity";
        case 17: return "Replaced with body double";
        case 18: return "Sabotaged negotiations";
        case 19: return "Smuggling contraband";
        case 20: return "Unauthorized surveillance";
        default: return "Roll Again";
    }
  }
}
