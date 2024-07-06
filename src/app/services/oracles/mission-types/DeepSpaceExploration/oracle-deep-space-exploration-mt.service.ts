import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleDeepSpaceExplorationMTService  extends OracleBaseService{

  public override title: string = "Deep Space Exploration";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Abandoned world or vessel";
        case 2: return "Advisor accompanying mission has mission of their own";
        case 3: return "Alien explorers were there before";
        case 4: return "Cosmozoan life-form is hungry";
        case 5: return "Cosmozoan life-form mistakes ship for rival";
        case 6: return "Cosmozoan life-form wants to mate with vessel";
        case 7: return "Cryostasis required to survive";
        case 8: return "Detect incoming threat";
        case 9: return "Discover a planet made of a strange substance";
        case 10: return "Dropping subspace beacons"
        case 11: return "Mapping a sector of space";
        case 12: return "Nebula is a sentient being";
        case 13: return "No communication with home"
        case 14: return "Peaceful planet offers respite"; 
        case 15: return "Ship becomes out of phase with reality";
        case 16: return "Strange probe discovered";
        case 17: return "Struck by object that sends ship off course";
        case 18: return "Test a technology";
        case 19: return "Warp does not work";
        case 20: return "Wormhole of unknown origins suddenly appears";
        default: return "Roll Again";
    }
  }
}
