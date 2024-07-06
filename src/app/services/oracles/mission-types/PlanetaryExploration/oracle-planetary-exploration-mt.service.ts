import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OraclePlanetaryExplorationMTService extends OracleBaseService{

  public override title: string = "Planetary Exploration";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Cetacean planet";
        case 2: return "Corrosive environment"
        case 3: return "Crashed ship";
        case 4: return "Dry seabed reveals ancient civilization";
        case 5: return "Ecological collapse";
        case 6: return "Enemy research facility";
        case 7: return "Forbidden world";
        case 8: return "Geothermal springs offer health benefits";
        case 9: return "Holy planet";
        case 10: return "Mass graves"
        case 11: return "Massive battlefield";
        case 12: return "Meteorites constantly entering atmosphere";
        case 13: return "Pre-wap species detects starship";
        case 14: return "Prison planet"; 
        case 15: return "Radioactive fog hides secret colony";
        case 16: return "Rare element discovered";
        case 17: return "Secret weapons facility";
        case 18: return "Sentient liquid metal pools";
        case 19: return "Trap";
        case 20: return "Unusual flora or fauna holds solution";
        default: return "Roll Again";
    }
  }
}
