import { Component,inject } from '@angular/core';
import { AssetlistComponent } from '../assetlist/assetlist.component';
import { AssetService } from '../../../services/asset/asset.service';
import { Asset } from '../../../services/database/database.service';

@Component({
  selector: 'app-tab-assets',
  standalone: true,
  imports: [
    AssetlistComponent
  ],
  templateUrl: './tab-assets.component.html',
  styleUrl: './tab-assets.component.scss'
})
export class TabAssetsComponent {
  assetService = inject(AssetService)

  newAsset(){
    this.assetService.newAsset();
  }

  newPresetAsset(asset:Asset)
  {
    asset.Id = undefined;
    asset.CampaignId = this.assetService.campaignId;
    this.assetService.putAsset(asset);
  }
}
