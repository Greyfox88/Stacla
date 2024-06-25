import { Component, OnInit, inject, Input } from '@angular/core';
import { CharacterComponent } from '../character/character.component';
import { CharacterService } from '../../../services/character/character.service';
import { Character } from '../../../services/database/database.service';


@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CharacterComponent
  ],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.scss'
})
export class CharacterlistComponent implements OnInit{
  private characterService = inject(CharacterService);
  public campaignId: number = 0;
  @Input() FocusedCharList: boolean = false;
  @Input() CrewCharList: boolean = false;
  @Input() SceneCharList: boolean = false;
  focusedCharacterId?: number|undefined;
  charList?: Character[] | undefined[];

  ngOnInit(): void {
    this.characterService.refreshCharacters();
    this.characterService.charSubject.subscribe(x => {
      this.charList = x;
    });
  }

  focusCharacter(charId:number|undefined) {
    if(this.focusedCharacterId === charId)
      this.focusedCharacterId = undefined;
    else
      this.focusedCharacterId = charId;
  }

  refreshCharacters() {
    this.characterService.refreshCharacters();    
  }
}