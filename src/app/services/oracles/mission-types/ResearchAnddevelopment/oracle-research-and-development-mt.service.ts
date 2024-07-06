import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleResearchAndDevelopmentMTService extends OracleBaseService{

  public override title: string = "Research and Development";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Astrometrics enhancement";
        case 2: return "Communications upgrade"
        case 3: return "Deflector upgrade";
        case 4: return "Engine upgrade";
        case 5: return "Exploring the mind";
        case 6: return "Holographic technology";
        case 7: return "Innovation with replicators";
        case 8: return "Interdimensional event";
        case 9: return "Medical innovation";
        case 10: return "Navigational system"
        case 11: return "New energy resource";
        case 12: return "New polymer";
        case 13: return "Power systems upgrade";
        case 14: return "Prime directive relevance questioned"; 
        case 15: return "Sensors upgrade";
        case 16: return "Temporal sciences";
        case 17: return "Terraforming technology";
        case 18: return "Transporter technology";
        case 19: return "Utopia Planitia project";
        case 20: return "Weapons development";
        default: return "Roll Again";
    }
  }
}