import { Component, OnDestroy, OnInit, inject, Input, Output, EventEmitter } from '@angular/core';
import { NgxEditorModule, Editor  } from 'ngx-editor';
import {FormsModule} from '@angular/forms';
import { AssetService } from '../../../services/asset/asset.service';

@Component({
  selector: 'app-asset',
  standalone: true,
  imports: [
    NgxEditorModule,
    FormsModule
  ],
  templateUrl: './asset.component.html',
  styleUrl: './asset.component.scss'
})
export class AssetComponent implements OnInit, OnDestroy{
  private assetService = inject(AssetService);
  @Input() assetId: number | undefined = 0;
  @Output() assetUpdatedEvent = new EventEmitter();

  CampaignId?: number = 0;
  Id?: number;
  Name: string = '';
  Class?: string;
  Registry?: string;
  Scale?: number;
  Traits?: string;
  Talents?: string;

  SysComms: number = 1;
  SysComputers: number = 1;
  SysEngines: number = 1;
  SysSensors: number = 1;
  SysStructure: number = 1;
  SysWeapons: number = 1;

  DeptCommand: number = 1;
  DeptConn: number = 1;
  DeptSecurity: number = 1;
  DeptEngineering: number = 1;
  DeptScience: number = 1;
  DeptMedical: number = 1;  

  Notes?: string;

  IsInFleet?: boolean = false;
  IsInScene?: boolean = false;

  editor: Editor = new Editor;

  ngOnInit(): void {
    if(this.assetId!=undefined)
      {
        this.assetService.getAsset(this.assetId).then(asset =>{
          if(asset!=undefined)
            {
              this.CampaignId = asset.CampaignId,
              this.Id = asset.Id,
              this.Name = asset.Name,
              this.Class = asset.Class,
              this.Registry = asset.Registry,
              this.Scale = asset.Scale,
              this.Traits = asset.Traits,
              this.Talents = asset.Talents,
              this.SysComms = asset.SysComms,
              this.SysComputers = asset.SysComputers,
              this.SysEngines =asset.SysEngines,
              this.SysSensors =asset.SysSensors,
              this.SysStructure =asset.SysStructure,
              this.SysWeapons =asset.SysWeapons,
              this.DeptCommand =asset.DeptCommand,
              this.DeptConn =asset.DeptConn,
              this.DeptSecurity =asset.DeptSecurity,
              this.DeptEngineering =asset.DeptEngineering,
              this.DeptScience =asset.DeptScience,
              this.DeptMedical =asset.DeptMedical,
              this.Notes =asset.Notes,
              this.IsInFleet = asset.IsInFleet,
              this.IsInScene = asset.IsInScene
            }       
        });
      }
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  save(): void {
    this.assetService.putAsset({
      CampaignId: this.CampaignId,
      Id: this.assetId,
      Name: this.Name,
      Class: this.Class,
      Registry: this.Registry,
      Scale: this.Scale,
      Traits: this.Traits,
      Talents: this.Talents,
      SysComms: this.SysComms,
      SysComputers: this.SysComputers,
      SysEngines:this.SysEngines,
      SysSensors:this.SysSensors,
      SysStructure:this.SysStructure,
      SysWeapons:this.SysWeapons,
      DeptCommand:this.DeptCommand,
      DeptConn:this.DeptConn,
      DeptSecurity:this.DeptSecurity,
      DeptEngineering:this.DeptEngineering,
      DeptScience:this.DeptScience,
      DeptMedical:this.DeptMedical,
      Notes:this.Notes,
      IsInFleet: this.IsInFleet,
      IsInScene: this.IsInScene
    })
  }

  delete():void {
    if(this.assetId!=undefined)
      {
        this.assetService.deleteAsset(this.assetId);
      }   
  }
}
