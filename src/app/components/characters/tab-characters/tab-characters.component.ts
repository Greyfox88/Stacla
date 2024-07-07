import { Component,inject } from '@angular/core';
import { CharacterlistComponent } from '../characterlist/characterlist.component';
import { CharacterService } from '../../../services/character/character.service';
import { Character } from '../../../services/database/database.service';

@Component({
  selector: 'app-tab-characters',
  standalone: true,
  imports: [
    CharacterlistComponent
  ],
  templateUrl: './tab-characters.component.html',
  styleUrl: './tab-characters.component.scss'
})
export class TabCharactersComponent {
  characterService = inject(CharacterService);

  newCharacter(){
    this.characterService.newCharacter();
  }

  newPresetCharacter(character:Character)
  {
    character.Id = undefined;
    character.CampaignId = this.characterService.campaignId;
    this.characterService.putCharacter(character);
  }
}
