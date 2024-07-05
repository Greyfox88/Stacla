import { Injectable, inject } from '@angular/core';
import { RollerService } from "../roller/roller.service";

@Injectable({
  providedIn: 'root'
})
export class OracleBaseService {
  protected rollerService = inject(RollerService);
  public title = "Oracle Base Service";
  public followUpOracle: OracleBaseService[] = []

  constructor() { }

  public getResult(valueOverride: number | undefined = undefined) : string
  {
      return "This is the base class, choose an oracle";
  }
}