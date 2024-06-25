import { Injectable, inject, signal } from '@angular/core';
import { DatabaseService, Character } from '../database/database.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CharacterService {
  private database = inject(DatabaseService);
  characters?: Character[] | undefined[];
  campaignId = 0;
  charSubject = new Subject<Character[] | undefined[]>();

  constructor() { }

  newCharacter(): void {
    this.database.putCharacter({
      CampaignId: this.campaignId,
      Name: 'New Character',
      AttControl: 1,
      AttDaring: 1,
      AttFitness: 1,
      AttInsight: 1,
      AttPresence: 1,
      AttReason: 1,    
      DisCommand: 1,
      DisConn: 1,
      DisSecurity: 1,
      DisEngineering: 1,
      DisScience: 1,
      DisMedical: 1,

      IsInCrew: false,
      IsInScene: false,
    })
    this.refreshCharacters();
  }

  refreshCharacters(): void {
    this.database.getCharacters(this.campaignId).then(charactersResult =>{
      this.charSubject.next(charactersResult);
    });
  }

  getCharacter(characterId: number){
    return this.database.getCharacter(characterId);
  }

  putCharacter(character: Character){
    this.database.putCharacter(character);
    this.refreshCharacters();
  }

  deleteCharacter(characterId: number) {
    this.database.deleteCharacter(characterId);
    this.refreshCharacters();
  }
}
