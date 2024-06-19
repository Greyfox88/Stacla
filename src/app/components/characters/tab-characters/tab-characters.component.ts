import { Component } from '@angular/core';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-tab-characters',
  standalone: true,
  imports: [
    CharacterComponent
  ],
  templateUrl: './tab-characters.component.html',
  styleUrl: './tab-characters.component.scss'
})
export class TabCharactersComponent {

}
