import { Component,inject } from '@angular/core';
import { CharacterlistComponent } from '../characterlist/characterlist.component';
import { CharacterService } from '../../../services/character/character.service';

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
  private characterService = inject(CharacterService);

  newCharacter(){
    this.characterService.newCharacter();
  }
}
