import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleMedicalMTService extends OracleBaseService{

  public override title: string = "Medical";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "All crew get sick";
        case 2: return "Asked by enemies to assist with research"
        case 3: return "Bioweapon unleashed";
        case 4: return "Conduct medical forensics investigation";
        case 5: return "Conduct routine crew evaluations";
        case 6: return "Crew catches new flu bug";
        case 7: return "Crew sick after strange event";
        case 8: return "Crew transformed into something else";
        case 9: return "Crew members going insane";
        case 10: return "Dead person miraculously comes back to life"
        case 11: return "Disease is solution";
        case 12: return "Doctor abducted to help terrorist group";
        case 13: return "Medical supplies tainted"
        case 14: return "Plague on alien ship or station"; 
        case 15: return "Plague on enemy ship or station";
        case 16: return "Plague on planet";
        case 17: return "Psychic disease spreads";
        case 18: return "Psychographic profile needed of species";
        case 19: return "Ship system causes sickness";
        case 20: return "Speak at medical conference";
        default: return "Roll Again";
    }
  }
}
