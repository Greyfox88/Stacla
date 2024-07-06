import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleEscortAndEvacuationMTService extends OracleBaseService{

  public override title: string = "Escort and Evacuation";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Aid scientists trapped in another realm";
        case 2: return "Attend congratulatory celebration for successful mission"
        case 3: return "Command fleet operation during evacuation";
        case 4: return "Deliver command officers to their new ship";
        case 5: return "Escort admiral to retirement location";
        case 6: return "Escort dignitary to crucial meeting";
        case 7: return "Escort key diplomat(s)";
        case 8: return "Evacuate planet";
        case 9: return "Evacuate ship about to explode";
        case 10: return "Evacuate space station"
        case 11: return "Evacuee out for revenge";
        case 12: return "Help evacuation efforts before natural disaster";
        case 13: return "Mechanical failure on escorted ship"
        case 14: return "Plot course for convoy"; 
        case 15: return "Rescue miners";
        case 16: return "Retrieve tactical team";
        case 17: return "Save endangered species from dying world";
        case 18: return "Shepherd civillian transport";
        case 19: return "Strategize evacuation scenario";
        case 20: return "Transfer supplies from one planet to another";
        default: return "Roll Again";
    }
  }
}
