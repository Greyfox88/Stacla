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
      Class: 'Unknown',
      Seed: seed,
      Ringed: seed > 750,
      Size: 10
    })
    this.refreshSystems();
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