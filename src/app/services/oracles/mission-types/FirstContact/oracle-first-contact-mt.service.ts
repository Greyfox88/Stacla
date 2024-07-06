import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleFirstContactMTService extends OracleBaseService {

  public override title: string = "First Contact";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Ascertain biochemical compatability";
        case 2: return "Assemble first contact team"
        case 3: return "Catalogue diseases and pathogens";
        case 4: return "Catalogue new technology";
        case 5: return "Compile linguistic database";
        case 6: return "Complete computer network integration";
        case 7: return "Create psychological profile of new species";
        case 8: return "Don ceremonial garb";
        case 9: return "Eat strange food";
        case 10: return "Establish security protocols"
        case 11: return "Establish transport procedures";
        case 12: return "Fix first contact gone wrong";
        case 13: return "Host diplomatic reception"
        case 14: return "Learn native dance"; 
        case 15: return "Make first contact";
        case 16: return "Participate in odd welcoming ceremony";
        case 17: return "Prepare xenoanthopological report";
        case 18: return "Repair malfunctioning duck blind";
        case 19: return "Second contact mission";
        case 20: return "Roll secondary directive from any mission type oracle";
        default: return "Roll Again";
    }
  }
}
