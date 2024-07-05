import { Injectable } from '@angular/core';
import { OracleBaseService } from '../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleEncounterService extends OracleBaseService {

  public override title: string = "Encounters";

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
                return "Abandoned Places";
        case 4: 
        case 5: 
        case 6: 
        case 7: 
                return "Deep Space";
        case 8: 
                return "Different Time or Reality";
        case 9: 
        case 10: 
        case 11: 
                return "Inhabited Planet";
        case 12: 
        case 13: 
        case 14: 
                return "Spacefaring Civilizations"; 
        case 15:
        case 16:
        case 17: 
                return "Subspace";
        case 18: 
        case 19: 
        case 20:                 
                return "Uninhabited Planet";                
        default: return "Roll Again";
    }
  }
}
