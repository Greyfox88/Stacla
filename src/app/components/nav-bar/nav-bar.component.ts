import { Component } from '@angular/core';
import { TabCampaignComponent } from '../campaign/tab-campaign/tab-campaign.component';
import { TabCharactersComponent } from '../characters/tab-characters/tab-characters.component';
import { TabAssetsComponent } from '../assets/tab-assets/tab-assets.component';
import { TabLogComponent } from '../logs/tab-log/tab-log.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    TabCampaignComponent,
    TabLogComponent,
    TabCharactersComponent,
    TabAssetsComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
