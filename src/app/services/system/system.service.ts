import { inject, Injectable } from '@angular/core';
import { DatabaseService, Planet, System } from '../database/database.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SystemService {
  private database = inject(DatabaseService);
  systems?: System[] | undefined[];
  campaignId = 0;
  systemSubject = new Subject<System[] | undefined[]>();

  constructor() { }

  
  newSystem(): void {
    this.database.putSystem({
      CampaignId: this.campaignId,
      Name: 'New System',
      Class: 'Unknown'
    })
    this.refreshSystems();
  }

  newPlanet(systemId:number):void {
    let seed = Math.random()*1000;
    this.database.putPlanet({
      CampaignId: this.campaignId,
      SystemId: systemId,
      Name: 'New Planet',
      Class: this.getPlanetClass(seed),
      Seed: seed,
      Ringed: seed > 750,
      Size: 10
    })
    this.refreshSystems();
  }

  getPlanetClass(seed: number): string {
    let planetClass = "D";
    let selector = seed.toString().charAt(1); //Use the 2nd number as a selector
    console.log(selector);
    if(selector=="0")
      planetClass = "D";
    if(selector=="1")
      planetClass = "G";
    if(selector=="2")
      planetClass = "H";
    if(selector=="3")
      planetClass = "J";
    if(selector=="4")
      planetClass = "K";
    if(selector=="5")
      planetClass = "L";
    if(selector=="6")
      planetClass = "M";
    if(selector=="7")
      planetClass = "N";
    if(selector=="8")
      planetClass = "T";
    if(selector=="9")
      planetClass = "Y";
    return planetClass;
  }

  refreshSystems(): void {
    this.database.getSystems(this.campaignId).then(systemsResult =>{
      this.systemSubject.next(systemsResult);
    });
  }

  getPlanet(planetId:number){
    return this.database.getPlanet(planetId);
  }

  async getSystemModel(systemId: number): Promise<SystemModel | undefined> {
    let systemModel: SystemModel | undefined;
    await this.database.getSystem(systemId).then(systemResult =>{
      systemModel = systemResult as SystemModel;
    });
    await this.database.getPlanets(systemId).then(planetsResult =>{      
      if(systemModel!=undefined)
        systemModel.Planets = planetsResult
    })
    return systemModel;
  }

  putPlanet(planet: Planet){
    this.database.putPlanet(planet);
    this.refreshSystems(); //TODO just refresh system screen
  }

  putSystem(system: System){
    this.database.putSystem(system);
    this.refreshSystems();
  }

  deletePlanet(planetId: number){
    this.database.deletePlanet(planetId);
    this.refreshSystems();
  }

  deleteSystemModel(systemId: number) {
    this.database.deletePlanets(systemId);
    this.database.deleteSystem(systemId);
    this.refreshSystems();
  }
}

export interface SystemModel extends System {
  Planets: Planet[] | any[];
}