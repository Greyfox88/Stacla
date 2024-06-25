import { Component, OnDestroy, OnInit, inject, Input, Output, EventEmitter } from '@angular/core';
import { NgxEditorModule, Editor  } from 'ngx-editor';
import {FormsModule} from '@angular/forms';
import { CharacterService } from '../../../services/character/character.service';

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
  private characterService = inject(CharacterService);
  @Input() characterId: number | undefined = 0;
  @Output() characterUpdatedEvent = new EventEmitter();

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
  Notes?: string;

  IsInCrew: boolean = false;
  IsInScene: boolean = false;

  ngOnInit(): void {
    if(this.characterId!=undefined)
      {
        this.characterService.getCharacter(this.characterId).then(character =>{
          if(character!=undefined)
            {
              this.Id = character.Id;
              this.CampaignId = character.CampaignId;
              this.Name = character.Name;
              this.Environment = character.Environment;
              this.Pronouns = character.Pronouns;
              this.EarlyOutlook = character.EarlyOutlook;
              this.Traits = character.Traits;
              this.Education = character.Education;
              this.Rank = character.Rank;
              this.Assignment = character.Assignment;
              this.CareerLength = character.CareerLength;
              this.CareerEvents = character.CareerEvents;
              this.Focuses = character.Focuses;
              this.Values = character.Values;
              this.AttControl = character.AttControl;
              this.AttDaring = character.AttDaring;
              this.AttFitness = character.AttFitness;
              this.AttInsight = character.AttInsight;
              this.AttPresence = character.AttPresence;
              this.AttReason = character.AttReason;
              this.DisCommand = character.DisCommand;
              this.DisConn = character.DisConn;
              this.DisSecurity = character.DisSecurity;
              this.DisEngineering = character.DisEngineering;
              this.DisScience = character.DisScience;
              this.DisMedical = character.DisMedical;
              this.Notes = character.Notes;
              this.IsInCrew = character.IsInCrew;
              this.IsInScene = character.IsInScene;
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
    this.characterService.putCharacter({
      CampaignId: this.CampaignId,
      Id: this.characterId,
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
    
      Notes: this.Notes,

      IsInCrew: this.IsInCrew,
      IsInScene: this.IsInScene
    });
  }

  delete():void {
    if(this.characterId!=undefined)
      {
        this.characterService.deleteCharacter(this.characterId);
      }   
  }
}
