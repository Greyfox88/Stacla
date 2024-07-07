import { Injectable } from '@angular/core';
import { OracleBaseService } from '../../oracle-base.service';

@Injectable({
  providedIn: 'root'
})
export class OracleSpiritualMTService extends OracleBaseService{

  public override title: string = "Spiritual";

  constructor() { super() }

  public override getResult(valueOverride: number | undefined = undefined) : string 
  {
    let result = valueOverride === undefined ? this.rollerService.roll() : valueOverride;
    switch(result)
    {
        case 1: return "Ancient diety appears";
        case 2: return "Archeological dig uncovers hidden truth"
        case 3: return "Assist with restoration of religious site";
        case 4: return "Community has decided to give up religion";
        case 5: return "Crew member has prophetic vision";
        case 6: return "Dieties are proven to be other-dimensional aliens";
        case 7: return "Entire population has shared vision";
        case 8: return "Exiled spiritual figure returns";
        case 9: return "Life after death experience";
        case 10: return "Minority group wants representation"
        case 11: return "New religion begins to form";
        case 12: return "Prophesied disaster occurs";
        case 13: return "Religious dissidents exiled";
        case 14: return "Religious minority takes extreme action"; 
        case 15: return "Religious sect forbids alien visitors";
        case 16: return "Science conflicts with long-held belief";
        case 17: return "Spiritual figure assassinated";
        case 18: return "Temple defaced or destroyed";
        case 19: return "Tradition unwittingly defiled by crew";
        case 20: return "Vow broken by holy order";
        default: return "Roll Again";
    }
  }
}
