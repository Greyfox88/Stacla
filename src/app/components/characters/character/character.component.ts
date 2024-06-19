import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgxEditorModule, Editor  } from 'ngx-editor';
import { DatabaseService } from '../../../services/database/database.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [
    NgxEditorModule,
    FormsModule
  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit, OnDestroy{
  private database = inject(DatabaseService);

  CampaignId: number = 0;
  Id?: number;
  Name: string = '';
  Environment?: string;
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

  AttControl: number = 1;
  AttDaring: number = 1;
  AttFitness: number = 1;
  AttInsight: number = 1;
  AttPresence: number = 1;
  AttReason: number = 1;

  DisCommand: number = 1;
  DisConn: number = 1;
  DisSecurity: number = 1;
  DisEngineering: number = 1;
  DisScience: number = 1;
  DisMedical: number = 1;

  editor: Editor = new Editor;
  Notes: string = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  save(): void {
    this.database.putCharacter({
      CampaignId: this.CampaignId,
      Id: this.Id,
      Name: this.Name,
      Environment: this.Environment,
      Pronouns: this.Pronouns,
      EarlyOutlook: this.EarlyOutlook,
      Traits: this.Traits,
      Education: this.Education,
      Rank: this.Rank,
      Assignment: this.Assignment,
      CareerLength: this.CareerLength,
      CareerEvents: this.CareerEvents,
      Focuses: this.Focuses,
      Values: this.Values,
    
      AttControl: this.AttControl,
      AttDaring: this.AttDaring,
      AttFitness: this.AttFitness,
      AttInsight: this.AttInsight,
      AttPresence: this.AttPresence,
      AttReason: this.AttReason,
    
      DisCommand: this.DisCommand,
      DisConn: this.DisConn,
      DisSecurity: this.DisSecurity,
      DisEngineering: this.DisEngineering,
      DisScience: this.DisScience,
      DisMedical: this.DisMedical,
    
      Notes: this.Notes
    });
  }
}
