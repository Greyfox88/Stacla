import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleDefenceMTService extends OracleBaseService{

  public override title: string = "Defence";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Argue the benefits of the Prime Directive";
        case 2: return "Defend colony"
        case 3: return "Defend ship from sentient entity";
        case 4: return "Defend space station";
        case 5: return "Defend the Federation from a smear campaign";
        case 6: return "Engage in war games with tactical advisor";
        case 7: return "Join fleet for defensive maneuvers";
        case 8: return "Neutral Zone violation";
        case 9: return "Retrieve lost weapons";
        case 10: return "Protect the rights of a religious group"
        case 11: return "Provide protection for diplomat";
        case 12: return "Represent a foreign polity as a neutral party";
        case 13: return "Secure trade location"
        case 14: return "Security services for vital meeting"; 
        case 15: return "Set up defence for faction";
        case 16: return "Ship's tactical system taken over by hostile";
        case 17: return "Tactical maneuvers with ally";
        case 18: return "Uphold the rights of a federation citizen";
        case 19: return "Uphold the rights of a Federation world";
        case 20: return "Uphold the laws of a Non-Federation world";
        default: return "Roll Again";
    }
  }
}
