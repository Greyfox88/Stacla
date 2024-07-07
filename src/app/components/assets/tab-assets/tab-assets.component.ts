import { Component,inject } from '@angular/core';
import { AssetlistComponent } from '../assetlist/assetlist.component';
import { AssetService } from '../../../services/asset/asset.service';
import { Asset } from '../../../services/database/database.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-assets',
  standalone: true,
  imports: [
    AssetlistComponent,
    FormsModule
  ],
  templateUrl: './tab-assets.component.html',
  styleUrl: './tab-assets.component.scss'
})
export class TabAssetsComponent {
  assetService = inject(AssetService)
  eras = [...new Set(this.assetService.masterAssetList.map(item => item.Era))];
  factions = [...new Set(this.assetService.masterAssetList.map(item => item.Faction))];
  types = [...new Set(this.assetService.masterAssetList.map(item => item.Type))];
  filteredAssetList = this.assetService.masterAssetList;
  //Warch out, these are currently magic string used in the filter below
  eraFilter = "Era";
  factionFilter = "Faction";
  typeFilter = "Type";

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
    this.filteredAssetList = this.assetService.masterAssetList.filter((asset) => (this.eraFilter == "Era" || asset.Era == this.eraFilter) && (this.factionFilter == "Faction" || asset.Faction == this.factionFilter) && (this.typeFilter == "Type" || asset.Type == this.typeFilter))
  }
}
