import { Component,inject } from '@angular/core';
import { CharacterlistComponent } from '../characterlist/characterlist.component';
import { CharacterService } from '../../../services/character/character.service';
import { Character } from '../../../services/database/database.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-characters',
  standalone: true,
  imports: [
    CharacterlistComponent,
    FormsModule
  ],
  templateUrl: './tab-characters.component.html',
  styleUrl: './tab-characters.component.scss'
})
export class TabCharactersComponent {
  characterService = inject(CharacterService);
  eras = [...new Set(this.characterService.masterCharacterList.map(item => item.Era))];
  factions = [...new Set(this.characterService.masterCharacterList.map(item => item.Faction))];
  traits = [...new Set(this.characterService.masterCharacterList.map(item => item.Traits))];
  filteredCharacterList = this.characterService.masterCharacterList;
  //Warch out, these are currently magic string used in the filter below
  eraFilter = "Era";
  factionFilter = "Faction";
  traitFilter = "Trait";


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
    this.filteredCharacterList = this.characterService.masterCharacterList.filter((character) => (this.eraFilter == "Era" || character.Era == this.eraFilter) && (this.factionFilter == "Faction" || character.Faction == this.factionFilter) && (this.traitFilter == "Trait" || character.Traits == this.traitFilter))
  }
}
