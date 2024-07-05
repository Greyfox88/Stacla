import { Injectable } from '@angular/core';
import { OracleBaseService } from '../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleThemeService extends OracleBaseService{

  public override title: string = "Theme";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Ancient Ruin";
        case 2: return "Colony";
        case 3: return "Crater";
        case 4: return "Energy Being";
        case 5: return "Exploding Planet";
        case 6: return "Gravimetric Distortion";
        case 7: return "Living Ship";
        case 8: return "Marooned Shuttlecraft";
        case 9: return "Nest";
        case 10: return "Quarantine Zone"
        case 11: return "Relic";
        case 12: return "Rogue Comet";
        case 13: return "Rogue Superweapon"
        case 14: return "Salvagable Wreck"; 
        case 15: return "Sentient Machine";
        case 16: return "Spatial Rift";
        case 17: return "Temporal Anomoly";
        case 18: return "Unknown life-form";
        case 19:
        case 20:                
                let missionA = this.rollerService.roll(0,1,18);
                let missionB = this.rollerService.roll(0,1,18);
                while(missionB===missionA)
                    missionB = this.rollerService.roll(0,1,18);
                return this.getResult(missionA) + " AND " + this.getResult(missionB);                
        default: return "Roll Again";
    }
  }
}
