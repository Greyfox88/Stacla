import { Injectable } from '@angular/core';
import { OracleBaseService } from '../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleIncidentService extends OracleBaseService{

  public override title: string = "Incident";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Arrest";
        case 2: return "Build";
        case 3: return "Command";
        case 4: return "Control";
        case 5: return "Debate";
        case 6: return "Destroy";
        case 7: return "Explore";
        case 8: return "Investigate";
        case 9: return "Medicate";
        case 10: return "Navigate"
        case 11: return "Rescue";
        case 12: return "Research";
        case 13: return "Retrieve"
        case 14: return "Save"; 
        case 15: return "Survey";
        case 16: return "Terraform";
        case 17: return "Transform";
        case 18: return "Unite";
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
