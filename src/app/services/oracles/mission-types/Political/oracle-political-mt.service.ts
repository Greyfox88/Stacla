import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OraclePoliticalMTService extends OracleBaseService{

  public override title: string = "Political";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Analyze conflict";
        case 2: return "Application to join Federation"
        case 3: return "Dismantle puppet government";
        case 4: return "Dissolve monetary system";
        case 5: return "Enforce Federation law";
        case 6: return "Expose corrupt politician";
        case 7: return "Extradite prisoner";
        case 8: return "Guard duty for rude dignitary";
        case 9: return "Honour retiring politician";
        case 10: return "Investigate use of banned technology"
        case 11: return "Investigate voter fraud";
        case 12: return "Issue arrest warrant";
        case 13: return "Manipulated media";
        case 14: return "Negotiate cease-fire"; 
        case 15: return "Politician needs a favour";
        case 16: return "Sanction noncompliant Federation planet";
        case 17: return "Stop flow of biogenic weaponry";
        case 18: return "Succession from the Federation";
        case 19: return "Transport cultural delegation";
        case 20: return "Violent uprising disrupts peace talks";
        default: return "Roll Again";
    }
  }
}
