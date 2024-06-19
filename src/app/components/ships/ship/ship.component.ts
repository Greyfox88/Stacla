import { Component, OnDestroy, OnInit, inject  } from '@angular/core';
import { NgxEditorModule, Editor  } from 'ngx-editor';
import { DatabaseService } from '../../../services/database/database.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [
    NgxEditorModule,
    FormsModule
  ],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.scss'
})
export class ShipComponent implements OnInit, OnDestroy{
  private database = inject(DatabaseService);

  CampaignId: number = 0;
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

  editor: Editor = new Editor;

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  save(): void {
    this.database.putShip({
      CampaignId: this.CampaignId,
      Id: this.Id,
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
      Notes:this.Notes
    })
  }
}
