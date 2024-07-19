import { Component } from '@angular/core';
import { TabCampaignComponent } from '../campaign/tab-campaign/tab-campaign.component';
import { TabCharactersComponent } from '../characters/tab-characters/tab-characters.component';
import { TabAssetsComponent } from '../assets/tab-assets/tab-assets.component';
import { TabLogComponent } from '../logs/tab-log/tab-log.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-body-tabs',
  standalone: true,
  imports: [    TabCampaignComponent,
    TabLogComponent,
    TabCharactersComponent,
    TabAssetsComponent,
    TranslateModule
  ],
  templateUrl: './body-tabs.component.html',
  styleUrl: './body-tabs.component.scss'
})
export class BodyTabsComponent {

}
