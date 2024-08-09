import { Component,inject } from '@angular/core';
import { CharacterlistComponent } from '../characterlist/characterlist.component';
import { CharacterService } from '../../../services/character/character.service';
import { Character } from '../../../services/database/database.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab-characters',
  standalone: true,
  imports: [
    CharacterlistComponent,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './tab-characters.component.html',
  styleUrl: './tab-characters.component.scss'
})
export class TabCharactersComponent {
  characterService = inject(CharacterService);
  translateService = inject(TranslateService);
  eras = [...new Set(this.characterService.masterCharacterList.map(item => item.Era).sort())];
  factions = [...new Set(this.characterService.masterCharacterList.map(item => item.Faction).sort())];
  traits = [...new Set(this.characterService.masterCharacterList.map(item => item.Traits).sort())];
  filteredCharacterList = this.characterService.masterCharacterList;

  eraFilter = "";
  factionFilter = "";
  traitFilter = "";

  newCharacter(){
    this.characterService.newCharacter();
  }

  newPresetCharacter(character:Character)
  {
    character.Id = undefined;
    character.CampaignId = this.characterService.campaignId;
    this.characterService.putCharacter(character);
  }

  filterChange()
  {
    this.filteredCharacterList = this.characterService.masterCharacterList.filter((character) => (this.eraFilter == "" || character.Era == this.eraFilter) && (this.factionFilter == "" || character.Faction == this.factionFilter) && (this.traitFilter == "" || character.Traits == this.traitFilter))
  }
}
