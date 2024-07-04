import { Injectable, inject, signal } from '@angular/core';
import { DatabaseService, Asset } from '../database/database.service';
import { Subject } from 'rxjs';
import { MasterAssetList } from './MasterAssetList';

@Injectable({
  providedIn: 'root'
})

export class AssetService extends MasterAssetList{
  private database = inject(DatabaseService);
  assets?: Asset[] | undefined[];
  campaignId = 0;
  assetSubject = new Subject<Asset[] | undefined[]>();

  constructor() { super() }

  newAsset(): void {
    this.database.putAsset({
      CampaignId: this.campaignId,
      Name: 'New Asset',
      SysComms: 1,
      SysComputers: 1,
      SysEngines:1,
      SysSensors:1,
      SysStructure:1,
      SysWeapons:1,
      DeptCommand:1,
      DeptConn:1,
      DeptSecurity:1,
      DeptEngineering:1,
      DeptScience:1,
      DeptMedical:1,
      IsInFleet: false,
      IsInScene: false,
    })
    this.refreshAssets();
  }

  refreshAssets(): void {
    this.database.getAssets(this.campaignId).then(assetResult =>{
      this.assetSubject.next(assetResult);
    });
  }

  getAsset(assetId: number){
    return this.database.getAsset(assetId);
  }

  putAsset(asset: Asset){
    this.database.putAsset(asset);
    this.refreshAssets();
  }

  deleteAsset(assetId: number) {
    this.database.deleteAsset(assetId);
    this.refreshAssets();
  }
}
