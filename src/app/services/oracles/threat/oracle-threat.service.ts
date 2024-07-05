import { Injectable } from '@angular/core';
import { OracleBaseService } from '../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleThreatService extends OracleBaseService{

  public override title: string = "Threat";

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
                return "Gravity";
        case 5: 
        case 6: 
        case 7: 
                return "Hostile Alien Entity";
        case 8: 
        case 9: 
        case 10: 
                return "Psionic Incident";
        case 11: 
        case 12: 
        case 13:                 
        case 14:  
                 return "Ship in Distress";               
        case 15:
        case 16:                
        case 17: 
        case 18: 
                 return "Subspace"; 
        case 19: return "Systems Failure";                   
        case 20: return "Temporal Anomoly";                 
                              
        default: return "Roll Again";
    }
  }
}
