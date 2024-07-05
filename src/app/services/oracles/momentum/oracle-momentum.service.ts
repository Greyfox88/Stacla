import { Injectable } from '@angular/core';
import { OracleBaseService } from '../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleMomentumService extends OracleBaseService{

  public override title: string = "Momentum";

  constructor() { super() }

  // TODO - Add descriptions
  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1:  
        case 2: 
        case 3: 
        case 4: 
                return "Advanced Warning";
        case 5: 
        case 6: 
        case 7: 
                return "Danger Revealed";
        case 8: 
        case 9: 
        case 10: 
                return "Friendly Aliens";
        case 11: 
        case 12: 
        case 13: 
                return "New Technology";
        case 14:                 
        case 15:
        case 16:
                return "Refuge"; 
        case 17: 
        case 18: 
        case 19: 
        case 20:                 
                return "Trade Opportunity";                
        default: return "Roll Again";
    }
  }
}
