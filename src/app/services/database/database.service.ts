import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';

//Campaign Model
export interface Campaign
{
  Id?: number;
  Title: string;
  Notes?: string;
}

//Campaign Common
export interface CampaignObject {
  CampaignId: number;
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

  IsCrew: boolean;
  IsInScene: boolean;
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
  Type?: number;
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService extends Dexie {
  private ShipAssetType = 1;
  Campaigns!: Table<Campaign, number>;
  Logs!: Table<Log, number>;
  Characters!: Table<Character, number>;
  Assets!: Table<Asset, number>;


  constructor() {
    super('Stacla');
    this.version(1).stores({
        Campaigns: '++Id',
        Logs: '++Id,CampaignId',
        Characters: '++Id,CampaignId',
        Assets: '++Id,CampaignId,Type'
    });
  }

  getCampaign(campaignId: number): Promise<Campaign|undefined> {
    return this.Campaigns.get({Id: campaignId});
  }

  putCampaign(campaign: Campaign){
    this.Campaigns.put(campaign);
  }

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

  getShip(campaignId: number, shipId: number): Promise<Asset|undefined> {
    return this.Assets.get({CampaignId: campaignId, Id: shipId, Type:this.ShipAssetType})
  }

  putShip(ship: Asset){
    ship.Type = this.ShipAssetType;
    this.Assets.put(ship);
  }
}