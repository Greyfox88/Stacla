import { Component } from '@angular/core';
import { StationComponent } from '../station/station.component';

@Component({
  selector: 'app-tab-stations',
  standalone: true,
  imports: [
    StationComponent
  ],
  templateUrl: './tab-stations.component.html',
  styleUrl: './tab-stations.component.scss'
})
export class TabStationsComponent {

}
