import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { exportDB, importDB } from 'dexie-export-import';

//Campaign Model
export interface Campaign
{
  Id?: number;
  Title: string;
  Notes?: string;
}

//Campaign Common
export interface CampaignObject {
  CampaignId?: number;
}

export interface Log extends CampaignObject {
  Id?: number;
  Title: string;
  Entry: string;  
}

//Characers
export interface Character extends CampaignObject {
  Id?: number,
  Name: string,
  Environment?: string,
  Pronouns?: string;
  EarlyOutlook?: string;
  Traits?: string;
  Education?: string;
  Rank?: string;
  Assignment?: string;
  CareerLength?: string;
  CareerEvents?: string;
  Focuses?: string;
  Values?: string;

  AttControl: number;
  AttDaring: number;
  AttFitness: number;
  AttInsight: number;
  AttPresence: number;
  AttReason: number;

  DisCommand: number;
  DisConn: number;
  DisSecurity: number;
  DisEngineering: number;
  DisScience: number;
  DisMedical: number;

  Notes?: string;

  IsInCrew?: boolean;
  IsInScene?: boolean;

  Era?: string;
  Faction?: string;
}

//Ships and Stations
export interface Asset extends CampaignObject {
  Id?: number;
  Name: string;
  Class?: string;
  Registry?: string;
  Scale?: number;
  Traits?: string;
  Talents?: string;

  SysComms: number;
  SysComputers: number;
  SysEngines: number;
  SysSensors: number;
  SysStructure: number;
  SysWeapons: number;

  DeptCommand: number;
  DeptConn: number;
  DeptSecurity: number;
  DeptEngineering: number;
  DeptScience: number;
  DeptMedical: number;  

  Notes?: string;

  IsInFleet?: boolean;
  IsInScene?: boolean;

  Era?: string;
  Faction?: string;
  Type?: string;
}

//Systems
export interface System extends CampaignObject {
  Id?: number;
  Name: string;
  Class: string;

  Notes?: string;
}

export interface Planet extends CampaignObject {
  Id?: number;
  SystemId?: number;
  Name: string;
  Class: string;
  Seed?: number;

  Notes?: string;
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService extends Dexie {
  Campaigns!: Table<Campaign, number>;
  Logs!: Table<Log, number>;
  Characters!: Table<Character, number>;
  Assets!: Table<Asset, number>;
  Systems!: Table<System, number>;
  Planets!: Table<Planet, number>;


  constructor() {
    super('Stacla');
    this.version(2).stores({
        Campaigns: '++Id',
        Logs: '++Id,CampaignId',
        Characters: '++Id,CampaignId',
        Assets: '++Id,CampaignId,Type',
        Systems: '++Id,CampaignId',
        Planets: '++Id,CampaignId,SystemId'
    });
  }

  //CAMPAIGNS
  getCampaign(campaignId: number): Promise<Campaign|undefined> {
    return this.Campaigns.get({Id: campaignId});
  }

  putCampaign(campaign: Campaign){
    this.Campaigns.put(campaign);
  }

  //LOGS
  getLog(logId: number): Promise<Log|undefined>{
    return this.Logs.get({Id:logId});
  }

  putLog(log: Log) {
    this.Logs.put(log);
  }

  deleteLog(logId: number) {
    this.Logs.delete(logId);
  }

  getLogs(campaignId: number): Promise<Log[]|undefined[]> {
    return this.Logs.where({CampaignId: campaignId}).toArray();
  }

  //CHARACTERS
  getCharacter(characterId: number): Promise<Character|undefined> {
    return this.Characters.get({Id: characterId});
  }

  putCharacter(character: Character){
    console.log(character);
    this.Characters.put(character);
  }

  deleteCharacter(characterId: number){
    this.Characters.delete(characterId);
  }

  getCharacters(campaignId: number): Promise<Character[]|undefined[]> {
    return this.Characters.where({CampaignId: campaignId}).toArray();
  }

  //ASSETS
  getAsset(assetId: number): Promise<Asset|undefined> {
    return this.Assets.get({Id: assetId})
  }

  putAsset(ship: Asset){
    this.Assets.put(ship);
  }

  deleteAsset(assetId: number){
    this.Assets.delete(assetId);
  }

  getAssets(campaignId: number): Promise<Asset[]|undefined[]> {
    return this.Assets.where({CampaignId: campaignId}).toArray();
  }

  //SYSTEMS
  getSystem(assetId: number): Promise<System|undefined> {
    return this.Systems.get({Id: assetId})
  }

  putSystem(system: System){
    this.Systems.put(system);
  }

  deleteSystem(assetId: number){
    this.Systems.delete(assetId);
  }

  getSystems(campaignId: number): Promise<System[]|undefined[]> {
    return this.Systems.where({CampaignId: campaignId}).toArray();
  }

  //PLANETS
  getPlanet(planetId: number): Promise<Planet|undefined> {
    return this.Planets.get({Id: planetId})
  }

  putPlanet(planet: Planet){
    this.Planets.put(planet);
  }

  deletePlanet(planetId: number){
    this.Planets.delete(planetId);
  }

  deletePlanets(systemId: number){
    this.Planets.where("SystemId").equals(systemId).delete();
  }

  getPlanets(systemId: number | undefined): Promise<Planet[]|undefined[]> {
    if(systemId==undefined)
      return this.Planets.toArray();
    else
      return this.Planets.where({SystemId: systemId}).toArray();    
  }

  //UTILITES
  importFiles(blob: Blob){
    this.clearData(false);
    importDB(blob).then(x => {
      window.location.reload();
    });
  }

  exportFiles = async () => {
    const dbBlob = await exportDB(this, { prettyJson: true });
    let fileName = `${this.name}.backup.json`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(dbBlob);
    link.download = fileName;
    link.click();
    link.remove(); 
  };


  clearData(reload:boolean = true){
    this.Campaigns.clear();
    this.Logs.clear();
    this.Characters.clear();
    this.Assets.clear();
    if(reload)
      window.location.reload();
  }
}