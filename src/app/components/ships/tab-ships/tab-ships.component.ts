import { Component } from '@angular/core';
import { ShipComponent } from '../ship/ship.component';

@Component({
  selector: 'app-tab-ships',
  standalone: true,
  imports: [
    ShipComponent
  ],
  templateUrl: './tab-ships.component.html',
  styleUrl: './tab-ships.component.scss'
})
export class TabShipsComponent {

}
