import { Component,inject } from '@angular/core';
import { AssetlistComponent } from '../assetlist/assetlist.component';
import { AssetService } from '../../../services/asset/asset.service';
import { Asset } from '../../../services/database/database.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab-assets',
  standalone: true,
  imports: [
    AssetlistComponent,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './tab-assets.component.html',
  styleUrl: './tab-assets.component.scss'
})
export class TabAssetsComponent {
  assetService = inject(AssetService)
  translateService = inject(TranslateService);
  eras = [...new Set(this.assetService.masterAssetList.map(item => item.Era).sort())];
  factions = [...new Set(this.assetService.masterAssetList.map(item => item.Faction).sort())];
  types = [...new Set(this.assetService.masterAssetList.map(item => item.Type).sort())];
  filteredAssetList = this.assetService.masterAssetList;

  eraFilter = "";
  factionFilter = "";
  typeFilter = "";

  newAsset(){
    this.assetService.newAsset();
  }

  newPresetAsset(asset:Asset)
  {
    asset.Id = undefined;
    asset.CampaignId = this.assetService.campaignId;
    this.assetService.putAsset(asset);
  }

  filterChange()
  {
    this.filteredAssetList = this.assetService.masterAssetList.filter((asset) => (this.eraFilter == "" || asset.Era == this.eraFilter) && (this.factionFilter == "" || asset.Faction == this.factionFilter) && (this.typeFilter == "" || asset.Type == this.typeFilter))
  }
}
